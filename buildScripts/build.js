import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod'
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production, this will take a momment'));

webpack(webpackConfig).run((err, stats) =>{
  if (err) { // so a fatal error occured
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErros) {
    return jsonStats.errors.map => console.log(chalk.red(error));
  }

  if (jsonStats.hasWarnings) {
    console.console.log(chalk.yellow('webpack generated the following warnings'));
    jsonStats.warnings.map => console.log(chalk.yellow(warning));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far the build succeeded.
  console.log('Your app has been built and written to /dist');
});
