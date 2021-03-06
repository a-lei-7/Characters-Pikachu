const string =`
    .skin* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.skin*::before,
.skin*::after {
  box-sizing: border-box;
}

.skin {
  position: relative;
  background: #ffe600;
  min-height: 50vh;
}
.nose {
  position: relative;
  border: 10px solid black;
  border-color: black transparent transparent;
  border-bottom: 0;
  width: 0px;
  height: 0px;
  left: 50%;
  top: 140px;
  margin-left: -10px;
  z-index: 10;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: center bottom; /* 晃动 左右以中间为基准 上下以最下方为基准*/
  animation: wave 300ms infinite linear;
}
.hu {
  position: absolute;
  width: 20px;
  height: 8px;
  top: -18px;
  left: -10px;
  border-radius: 10px 10px 0 0;
  background-color: black;
}
.eye {
  border: 2px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}
.eye::before {
  content: "";
  display: block;
  border: 3px solid #000;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  left: 6px;
  top: 1px;
}
.eye.left {
  transform: translate(-100px);
}
.eye.right {
  transform: translate(100px);
}
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 165px;
  margin-left: -100px;
}
.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}
.mouth .up .lip {
  border: 3px solid black;
  height: 30px;
  width: 100px;
  border-top-color: transparent;
  border-right-color: transparent;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  background: #ffe600;
}
.mouth .up > .lip.left {
  border-radius: 0 0 0 30px;
  transform: rotate(-17deg) translateX(-54px);
}
.mouth .up > .lip.right {
  width: 100px;
  border-radius: 0 0 50px 0;
  transform: rotate(17deg) translateX(54px);
}
.mouth .up .lip::before {
  content: "";
  display: block;
  position: absolute;
  width: 5px;
  height: 30px;
  background-color: #ffe600;
  bottom: 0;
}
.mouth .up .lip.left::before {
  right: -4px;
}
.mouth .up .lip.right::before {
  left: -4px;
}
.mouth .down {
  height: 180px;
  width: 100%;
  position: absolute;
  top: 5px;
  overflow: hidden;
}
.mouth .down .yuan1 {
  border: 3px solid black;
  width: 100%;
  height: 1300px;
  position: absolute;
  left: 0;
  bottom: 10px;
  background: #9b000a;
  border-radius: 0 0 50% 50%;
  overflow: hidden;
  box-shadow: 1px 1px 1px #ccc;
}
.mouth .down .yuan1 .yuan2 {
  height: 300px;
  width: 150px;
  position: absolute;
  background: #ff485f;
  bottom: -165px;
  left: 50%;
  margin-left: -75px;
  border-radius: 70px;
}
.face {
  position: absolute;
  left: 50%;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  top: 200px;
  margin-left: -44px;
  z-index: 3;
}
.face > img {
  position: absolute;
  top: 50%;
  left: 50%;
}
.face.left {
  transform: translateX(-180px);
  background: #ff0000;
  border-radius: 50%;
}
.face.left > img {
  transform: rotateY(180deg);
  transform-origin: 0 0;
}
.face.right {
  transform: translateX(180px);
  background: #ff0000;
  border-radius: 50%;
}
`
export default string; //将 string 导出