import React from "react";
import propTypes from "prop-types";

function LanguagePicker({ setLangage }) {
  const languages = [
    { code: "en", sumbol: "us" },
    { code: "en", sumbol: "us" },
  ];

  const languageIcons = languages.map((lang) => (
    <span
      data-test="icon-language"
      key={lang.code}
      onClick={() => setLangage(lang.code)}
    >
      {lang.symbol}
    </span>
  ));

  return;
}
