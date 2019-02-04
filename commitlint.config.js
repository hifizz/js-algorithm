/**
 * Commitlint website and documentation: https://marionebl.github.io/commitlint/#/
 * GitHub repo: https://github.com/marionebl/commitlint
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // rules & wildcards copy from https://github.com/erikmueller/conventional-changelog-lint-config-atom/blob/master/index.js
  parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        /** WIP means Working in progress，used in GitLab usually  */
        'wip',
        /** Merge branch */
        'merge',
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test'
      ]
    ]
  }
}
