module.exports = {
  root: true,
  extends: ["@react-native-community", "prettier"],
  overrides: [
    {
      rules: {
        "prettier/prettier": "error",
        "no-shadow": "off",
        "no-undef": "off",
        "react-hooks/exhaustive-deps": "off",
      },
    },
  ],
};
