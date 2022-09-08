// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// export
module.exports = {
  // parcel main.js 
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry : './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // __dirname : webpack.config.js 파일이 있는 경로
    // 'dist' : 폴더명
    // path : path.resolve(__dirname, 'dist'), // 주석해도 dist 로 만들어짐
    // filename: 'main.js', // 위에 entry 에 선언해서 주석해도 만들어짐
    clean: true // 폴더명에 남아있는 파일 제거
  },

  module:{
    rules : [
      {
        test: /\.s?css$/, // 정규식으로 .?css 로 끝나는 모든 파일
        use: [ // 순서가 중요 style-loader 담에 css-loader
          'style-loader', // 4번 css-loader 에서 해석된 내용을 index.html 에 삽입을 해주는 package
          'css-loader', // 3번 : JS에서 CSS 를 읽을 수 있게 하는 package
          'postcss-loader', // 2번: Postcss-loader 실행
          'sass-loader' // 1번: css-loader 가 실행되기 전에 sass-loader 실행 package
        ]
      },
      {
        test: /\.js$/, // 정규식으로 .js 로 끝나는 모든 파일
        use: [
          'babel-loader' // webpack에서 babel 을 해석하기 위한 loader package 연결
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins : [
    new HtmlPlugin({
      template: './index.html'
    }),
    // build 시, static 폴더에 있는 파일들이 dist 폴더로 copy 되서 들어가게 해주는 플러그인
    new CopyPlugin({ 
      patterns: [{
        from: 'static' // root 경로에 만들어 놓은 폴더 명
      }]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}

