/* esm.sh - @codemirror/collab@6.1.1 */
// node_modules/@codemirror/collab/dist/index.js
import { Facet, combineConfig, Annotation, StateField, StateEffect, ChangeSet, Transaction } from "../../state@^6.0.0.js";
var LocalUpdate = class {
  constructor(origin, changes, effects, clientID) {
    this.origin = origin;
    this.changes = changes;
    this.effects = effects;
    this.clientID = clientID;
  }
};
var CollabState = class {
  constructor(version, unconfirmed) {
    this.version = version;
    this.unconfirmed = unconfirmed;
  }
};
var collabConfig = /* @__PURE__ */ Facet.define({
  combine(configs) {
    let combined = combineConfig(configs, { startVersion: 0, clientID: null, sharedEffects: () => [] }, {
      generatedID: (a) => a
    });
    if (combined.clientID == null)
      combined.clientID = configs.length && configs[0].generatedID || "";
    return combined;
  }
});
var collabReceive = /* @__PURE__ */ Annotation.define();
var collabField = /* @__PURE__ */ StateField.define({
  create(state) {
    return new CollabState(state.facet(collabConfig).startVersion, []);
  },
  update(collab2, tr) {
    let isSync = tr.annotation(collabReceive);
    if (isSync)
      return isSync;
    let { sharedEffects, clientID } = tr.startState.facet(collabConfig);
    let effects = sharedEffects(tr);
    if (effects.length || !tr.changes.empty)
      return new CollabState(collab2.version, collab2.unconfirmed.concat(new LocalUpdate(tr, tr.changes, effects, clientID)));
    return collab2;
  }
});
function collab(config = {}) {
  return [collabField, collabConfig.of(Object.assign({ generatedID: Math.floor(Math.random() * 1e9).toString(36) }, config))];
}
function receiveUpdates(state, updates) {
  let { version, unconfirmed } = state.field(collabField);
  let { clientID } = state.facet(collabConfig);
  version += updates.length;
  let effects = [], changes = null;
  let own = 0;
  for (let update of updates) {
    let ours = own < unconfirmed.length ? unconfirmed[own] : null;
    if (ours && ours.clientID == update.clientID) {
      if (changes)
        changes = changes.map(ours.changes, true);
      effects = StateEffect.mapEffects(effects, update.changes);
      own++;
    } else {
      effects = StateEffect.mapEffects(effects, update.changes);
      if (update.effects)
        effects = effects.concat(update.effects);
      changes = changes ? changes.compose(update.changes) : update.changes;
    }
  }
  if (own)
    unconfirmed = unconfirmed.slice(own);
  if (unconfirmed.length) {
    if (changes)
      unconfirmed = unconfirmed.map((update) => {
        let updateChanges = update.changes.map(changes);
        changes = changes.map(update.changes, true);
        return new LocalUpdate(update.origin, updateChanges, StateEffect.mapEffects(update.effects, changes), clientID);
      });
    if (effects.length) {
      let composed = unconfirmed.reduce((ch, u) => ch.compose(u.changes), ChangeSet.empty(unconfirmed[0].changes.length));
      effects = StateEffect.mapEffects(effects, composed);
    }
  }
  if (!changes)
    return state.update({ annotations: [collabReceive.of(new CollabState(version, unconfirmed))] });
  return state.update({
    changes,
    effects,
    annotations: [
      Transaction.addToHistory.of(false),
      Transaction.remote.of(true),
      collabReceive.of(new CollabState(version, unconfirmed))
    ],
    filter: false
  });
}
function sendableUpdates(state) {
  return state.field(collabField).unconfirmed;
}
function getSyncedVersion(state) {
  return state.field(collabField).version;
}
function getClientID(state) {
  return state.facet(collabConfig).clientID;
}
function rebaseUpdates(updates, over) {
  if (!over.length || !updates.length)
    return updates;
  let changes = null, skip = 0;
  for (let update of over) {
    let other = skip < updates.length ? updates[skip] : null;
    if (other && other.clientID == update.clientID) {
      if (changes)
        changes = changes.mapDesc(other.changes, true);
      skip++;
    } else {
      changes = changes ? changes.composeDesc(update.changes) : update.changes;
    }
  }
  if (skip)
    updates = updates.slice(skip);
  return !changes ? updates : updates.map((update) => {
    let updateChanges = update.changes.map(changes);
    changes = changes.mapDesc(update.changes, true);
    return {
      changes: updateChanges,
      effects: update.effects && StateEffect.mapEffects(update.effects, changes),
      clientID: update.clientID
    };
  });
}
export {
  collab,
  getClientID,
  getSyncedVersion,
  rebaseUpdates,
  receiveUpdates,
  sendableUpdates
};
//# sourceMappingURL=collab.development.mjs.map