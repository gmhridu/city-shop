{
    "editor.copyWithSyntaxHighlighting": false,
    "diffEditor.ignoreTrimWhitespace": false,
    "editor.emptySelectionClipboard": false,
    "workbench.editor.enablePreview": false,
    "window.newWindowDimensions": "inherit",
    "editor.multiCursorModifier": "ctrlCmd",
    "files.trimTrailingWhitespace": true,
    "diffEditor.renderSideBySide": false,
    "editor.snippetSuggestions": "top",
    "editor.detectIndentation": false,
    "window.nativeFullScreen": true,
    "files.insertFinalNewline": true,
    "files.trimFinalNewlines": true,
    "editor.minimap.enabled": false,
    "editor.lineNumbers": "off",
    "editor.guides.indentation": false,
    "scm.diffDecorations": "none",
    "editor.hover.delay": 300,
    "editor.hover.enabled": true,
    "editor.matchBrackets": "never",
    "workbench.tips.enabled": false,
    "editor.colorDecorators": false,
    "git.decorations.enabled": false,
    "workbench.startupEditor": "none",
    "editor.lightbulb.enabled": "off",
    "editor.selectionHighlight": false,
    "editor.overviewRulerBorder": false,
    "editor.renderLineHighlight": "none",
    "editor.occurrencesHighlight": "off",
    "problems.decorations.enabled": false,
    "editor.renderControlCharacters": false,
    "editor.hideCursorInOverviewRuler": true,
    "editor.gotoLocation.multipleReferences": "goto",
    "editor.gotoLocation.multipleDefinitions": "goto",
    "editor.gotoLocation.multipleDeclarations": "goto",
    "workbench.editor.enablePreviewFromQuickOpen": false,
    "editor.gotoLocation.multipleImplementations": "goto",
    "editor.gotoLocation.multipleTypeDefinitions": "goto",

    // Typography
    "editor.fontFamily": "Geist Mono, JetBrains Mono, Fira Code",
    "editor.suggestFontSize": 18,
    "editor.suggestLineHeight": 25,
    "terminal.integrated.lineHeight": 1,
    "terminal.integrated.fontSize": 18,

    "search.useIgnoreFiles": false,
    "search.exclude": {
      "*/vendor/{[^l],?[^ai]}": true,
      "*/public/{[^i],?[^n]}": true,
      "**/node_modules": true,
      "**/dist": true,
      "**/_ide_helper.php": true,
      "**/composer.lock": true,
      "**/package-lock.json": true,
      "storage": true,
      ".phpunit.result.cache": true
    },

    /**
     * Code
     **/
    "editor.wordSeparators": "`~!@#%^&*()=+[{]}\\|;:'\",.<>/?",
    "emmet.includeLanguages": {
      "blade": "html",
      "vue-html": "html",
      "vue": "html",
      "react": "html",
      "javascript": "html"
    },
    "files.associations": {
      ".php_cs": "php",
      ".php_cs.dist": "php"
    },

    /**
     * PHP
     **/
    "php.suggest.basic": false,

    /**
     * Prettier
     **/
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[typescriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[tailwindcss]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[vue]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[javascriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "prettier.requireConfig": true,
    "prettier.useEditorConfig": false,
    "explorer.sortOrder": "type",
    "prettier.tabWidth": 4,
    "vetur.format.options.tabSize": 4,
    "workbench.tree.indent": 15,
    "[html]": {
      "editor.defaultFormatter": "apility.beautify-blade",
      "editor.formatOnSave": true
    },
    "editor.wordWrapColumn": 80,
    "files.autoSave": "afterDelay",
    "[css]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },

    "editor.quickSuggestions": {
      "strings": true
    },
    "[jsonc]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
      "editor.defaultFormatter": "vscode.json-language-features"
    },
    "security.workspace.trust.untrustedFiles": "open",
    "editor.linkedEditing": true,
    "editor.formatOnSave": false,
    "editor.fontLigatures": "'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'ss07', 'ss08', 'calt', 'dlig'",
    "diffEditor.wordWrap": "on",
    "notebook.output.wordWrap": true,
    "editor.fontSize": 18,
    "editor.minimap.maxColumn": 250,
    "codesnap.containerPadding": "8em",
    "codesnap.boxShadow": "rgba(0, 0, 0, 0.55) 0px 12px 24px",
    "explorer.confirmDelete": false,
    "editor.accessibilitySupport": "off",
    "chat.editor.wordWrap": "on",
    "[php]": {
      "editor.defaultFormatter": "bmewburn.vscode-intelephense-client"
    },
    "tailwindCSS.includeLanguages": {
      "plaintext": "html"
    },
    "tailwindCSS.experimental.configFile": null,
    "editor.fontWeight": "400",
    "workbench.statusBar.visible": false,
    "editor.inlineSuggest.suppressSuggestions": true,
    "codesnap.backgroundColor": "#FFC540",
    "codesnap.showLineNumbers": false,
    "codesnap.roundedCorners": true,
    "editor.padding.top": 16,
    "editor.cursorBlinking": "solid",
    "editor.stickyScroll.enabled": false,
    "editor.lineHeight": 25, // Set line height for spacing

    "editor.tokenColorCustomizations": {
      "textMateRules": [
        {
          "scope": [
            "comment",
            "keyword",
            "variable.language",
            "entity.other.attribute-name.html",
            "entity.other.attribute-name",
            "keyword.control",
            "storage.type",
            "comment",
            "comment.block",
            "comment.line"
          ],
          "settings": {
            "fontStyle": ""
          }
        }
      ]
    },
    "material-icon-theme.saturation": 0,
    "vscode_custom_css.imports": [
      "/media/gm-redoy/programming/Programming/vscode-settings-json/custom-vscode.css",
      "/media/gm-redoy/programming/Programming/vscode-settings-json/vscode-script.js",
      "file:///home/gm-redoy/.vscode/extensions/brandonkirbyson.vscode-animations-2.0.4/dist/updateHandler.js"
    ],

    "workbench.colorTheme": "freeCodeCamp Dark Theme",
    "workbench.iconTheme": "catppuccin-macchiato",
    "material-icon-theme.files.color": "#42a5f5",
    "workbench.tree.enableStickyScroll": false,
    "workbench.editor.showTabs": "none",
    "editor.mouseWheelZoom": true,
    "window.customTitleBarVisibility": "auto",
    "tabnine.experimentalAutoImports": true,
    "terminal.integrated.env.linux": {},
    "console-ninja.featureSet": "Community",
    "animations.Install-Method": "Custom CSS and JS"
  }
