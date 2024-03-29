module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // 'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        ".eslintrc.{js,cjs,ts}"
      ],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest"
  },
  plugins: [
    "@typescript-eslint",
    // 'prettier'
  ],
  rules: {

    indent: ["error", 2],

    quotes: ["error", "double"],

    semi: ["error", "always"],

    // Esto marcará los espacios finales como un error
    "no-trailing-spaces": "error",

    // Advertir sobre el uso de console.log
    "no-console": "warn",

    // Limitar la complejidad ciclomática de las funciones
    complexity: ["error", { max: 10 }],

    // Limitar el anidamiento de bloques para mejorar la legibilidad
    "max-depth": ["error", 4],

    // Establecer un límite máximo de líneas por archivo
    "max-lines": ["error", 300],

    // Asegurarse de que no hay variables no utilizadas
    //"no-unused-vars": "off",//['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],

    // No revisar si hay variables sin utilizar
    "@typescript-eslint/no-unused-vars": "off",

    // Fomentar el uso de const para variables que no se reasignan
    "prefer-const": ["error", {
      destructuring: "any",
      ignoreReadBeforeAssign: false
    }],

    // Requiere el uso de let o const en lugar de var
    "no-var": "error",

    // Fomentar el uso de literales de plantilla
    "prefer-template": "error",

    // Requiere el uso de === y !== en lugar de == y !=
    eqeqeq: ["error", "always", {null: "ignore"}],

    // Añadidas para manejar espacios adecuadamente
    "space-before-function-paren": ["error", {
      anonymous: "always",
      named: "never",
      asyncArrow: "always"
    }],

    "arrow-spacing": ["error", { before: true, after: true }],

    "keyword-spacing": ["error", { before: true, after: true }],

    "space-infix-ops": "error",

    "no-multi-spaces": ["error", { ignoreEOLComments: true, exceptions: { VariableDeclarator: true } }],

    "space-in-parens": ["error", "never"],

    "block-spacing": ["error", "always"],
  }
};
