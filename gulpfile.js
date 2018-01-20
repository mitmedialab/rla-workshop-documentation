// Import libraries
const gulp = require('gulp');
const ts = require('gulp-typescript');
const webpack = require('webpack-stream');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
const concat = require('gulp-concat');
const runSequence = require('run-sequence');

/*
Default:
- default: build everything then watch everything and run nodemon
Build:
- build: Build everything
- build-server: Build server-side Node TypeScript
- build-react: Build client-side React TypeScript
- build-sass: Build Sass styling
Watch:
- watch: Watch everything
- watch-server: Watch server files, build on change
- watch-react: Watch React files, build on change
- watch-sass: Watch Sass files, build on change
Run:
- nodemon: Run Node on main server file, restart on change
*/

gulp.task('default', () => {
  runSequence('build', 'watch', 'nodemon');
});

gulp.task('build', ['build-server', 'build-react', 'build-sass'])

gulp.task('build-server', () => {
  let tsProject = ts.createProject('tsconfig.json');
  return tsProject.src()
    .pipe(tsProject()).js
    .pipe(gulp.dest('server/build'));
});

gulp.task('build-react', () => {
  return gulp.src('./client/src/index.tsx')
    .pipe(webpack({
      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ]
      },
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('client/public/dist'));
});

gulp.task('build-sass', () => {
  return gulp.src('client/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('client/public/dist'));
});

gulp.task('watch', ['watch-server', 'watch-react', 'watch-sass'])

gulp.task('watch-server', () => {
  return gulp.watch('server/src/**/*', ['build-server']);
});

gulp.task('watch-react', () => {
  return gulp.watch('client/src/**/*', ['build-react']);
});

gulp.task('watch-sass', () => {
  return gulp.watch('client/scss/**/*', ['build-sass']);
});

gulp.task('nodemon', () => {
  return nodemon({
    script: 'server/build/server.js',
    watch: 'server/build'
  });
});