module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'airbnb',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		// 'react',
	],
	rules: {
		'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
		'indent': [2, 'tab', {ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],}],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'no-tabs': 0,
		'react/destructuring-assignment': [0],
		'react/prop-types': 0,
		'react/no-unused-state': 1,
		'max-len': 0,
		'no-param-reassign': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'no-underscore-dangle': 1,
	},
};