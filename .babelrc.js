module.exports = {
  // preset-env module 내보내기
  presets: ["@babel/preset-env"], // 따로 일일히 명시해야되는 JS 를 지원해주는 pacakge
  plugins: [
    // 2차원 배열 생성
    ["@babel/plugin-transform-runtime"], // babel 이 runtime 으로 실행되기 위해 옮겨주는 package
  ],
};