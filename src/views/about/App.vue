<script setup lang="ts">
const handleLick = (item: any) => {
  if (item == 'index') {
    window.location.href = '/'
  }
}
</script>

<template>
  <div class="menuBox">
    <div class="contentBox">
      <div class="about">
        <div class="indexTextBox1">
          <span class="indexText1">关于我们</span>
        </div>
        <img class="aboutImage" src="@/assets/image/about2.png" />
      </div>
      <div class="breadcrumb">
        <div style="display: flex">
          <div @click="handleLick('index')">首页</div>
          <div class="breadcrumbSpan">></div>
          <div>关于我们</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menuBox {
  display: flex;
  height: 100vh;
}
.contentBox {
  flex-grow: 1; /* 右边内容占据剩余空间 */
  overflow-y: auto; /* 右边内容溢出时显示滚动条 */
}

.indexTextBox1 {
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 15%;
  left: 8vw;
}
.indexText1 {
  color: #fff;
  font-size: 65px;
  font-family: YouSheBiaoTiHei;
  line-height: 125px;
}
.aboutTitle {
  font-size: 2.3vw;
  color: black;
  position: relative;
  top: 5.9975vw;
  display: flex;
  font-weight: 600;
  justify-content: center;
}
.aboutLine {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 5%;
}
.item .text-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -6.04167vw;
  font-size: 0.84167vw;
}
.item .text-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 1.95833vw;
  font-size: 0.84167vw;
}
.item .text-3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 0.84167vw;
  top: -8.04167vw;
}
.item .text-4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.84167vw;
  position: relative;
  top: 1.95833vw;
}
.item .text-5 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.84167vw;
  position: relative;
  top: -8.04167vw;
}
.item .text-6 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 0.84167vw;
  top: 1.95833vw;
}
.item .text-7 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 0.84167vw;
  top: -8.04167vw;
}
.licheng {
  display: flex;
}
.item {
  min-width: 15.9375vw;
  min-height: 8.07292vw;
  margin-left: -7.96875vw;
  position: relative;
  top: -11.04167vw;
}
.line {
  height: 0.15625vw;
  background-color: #cda143;
  width: 100%;
}
.ball {
  width: 1.04167vw;
  height: 1.04167vw;
  background-color: #cda143;
  border-radius: 50%;
  position: absolute;
  left: 7.9375vw;
  top: -0.49167vw;
}
.aboutCenter {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-indent: 2em;
  flex-direction: column;
}
.aboutCenter span {
  display: inline-block;
  width: 85%;
  font-size: 16px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #353535;
  line-height: 42px;
}
.about {
  width: 100%;
  height: auto;
  max-height: 720px;
  overflow: hidden;
  position: relative;
}
.aboutImage {
  width: 100%;
  height: auto;
}

.aboutImage1 {
  width: 100%;
  height: auto;
}
a {
  text-decoration: none;
  color: #7a7a7a;
}

a:hover {
  border-bottom: 2px solid #3ab8fb;
  padding-bottom: 19px;
  color: #1e1e1e;
}
.breadcrumbRight div {
  font-weight: 600;
  font-size: 16px;
  color: #1e1e1e;
  padding: 0 10px;
}
.breadcrumb {
  margin: 30px 50px;
  color: #7a7a7a;
  border-bottom: 1px solid #7a7a7a2e;
  padding-bottom: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
.breadcrumbSpan {
  padding: 0 10px;
}

.active {
  border-bottom: 2px solid #3ab8fb;
  padding-bottom: 19px;
  color: #1e1e1e;
  font-weight: 600;
}

@media screen and (max-width: 800px) {
  .breadcrumb {
    display: none;
  }
  .title {
    font-size: 24px;
  }
  .title1 {
    font-size: 14px;
    padding: 20px 0;
    width: 88%;
  }
  .aboutImage {
    height: 250px;
    width: auto;
  }
  .indexText1 {
    font-size: 30px;
    line-height: 60px;
  }
  .aboutCenter {
    height: auto;
    margin: 20px 0;
  }
  .aboutImage1 {
    height: 700px;
    width: auto;
  }
  .aboutTitle {
    font-size: 6.3vw;
    color: black;
    position: relative;
    top: 13.9975vw;
    display: flex;
    font-weight: 600;
    justify-content: center;
  }
  .licheng {
    flex-direction: column;
  }
  .aboutLine {
    position: relative;
    top: -658px;
    left: 50px;
  }
  .line {
    background-color: #cda143;
    height: 75px;
    width: 2px;
  }
  .item {
    height: 75px;
    left: 68px;
    min-width: 68px;
    min-height: 0px;
    margin-left: -35px;
    position: relative;
    top: 40px;
  }
  .ball {
    width: 12px;
    height: 12px;
    background-color: #cda143;
    border-radius: 50%;
    position: absolute;
    left: -5px;
    top: 23px;
  }
  .item .text-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    left: -193px;
    font-size: 12px;
    top: -70px;
  }
  .item .text-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    left: -10px;
    font-size: 12px;
    top: -68px;
  }
  .item .text-3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    left: -190px;
    font-size: 12px;
    top: -85px;
  }
  .item .text-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    left: -5px;
    font-size: 12px;
    top: -90px;
    width: 195px;
  }
  .item .text-5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    left: -189px;
    font-size: 12px;
    top: -90px;
    width: 195px;
  }
  .item .text-6 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    left: -10px;
    font-size: 12px;
    top: -90px;
    width: 195px;
  }
  .item .text-7 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    left: -190px;
    font-size: 12px;
    top: -90px;
    width: 195px;
  }
}
</style>
