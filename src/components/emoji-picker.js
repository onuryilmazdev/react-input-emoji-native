// vendors
import React, { memo, useMemo } from "react";
import { Picker } from "emoji-mart";
import t from "prop-types";
import "emoji-mart/css/emoji-mart.css";

/**
 * @typedef {object} Props
 * @property {function(import("../types/types").EmojiMartItem): void} onSelectEmoji
 * @property {boolean} disableRecent
 * @property {boolean} native
 * @property {object[]} i18n
 * @property {object[]} customEmojis
 */

/**
 * Emoji Picker Component
 * @param {Props} props
 * @return {React.FC}
 */
function EmojiPicker({
  onSelectEmoji,
  disableRecent,
  customEmojis,
  native,
  i18n
}) {
  const excluePicker = useMemo(() => {
    /** @type import("emoji-mart").CategoryName[] */
    const exclude = [];

    if (disableRecent) {
      exclude.push("recent");
    }

    return exclude;
  }, [disableRecent]);

  return (
    <Picker
      showPreview={false}
      showSkinTones={false}
      set="apple"
      onSelect={onSelectEmoji}
      exclude={excluePicker}
      custom={customEmojis}
      native={native}
      i18n={i18n}
    />
  );
}

EmojiPicker.propTypes = {
  onSelectEmoji: t.func,
  disableRecent: t.bool,
  native: t.bool,
  customEmojis: t.array,
  i18n: t.object
};

export default memo(EmojiPicker);
