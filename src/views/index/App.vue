<template>
  <div class="menuBox">
    <div class="contentBox">
      <div class="center">
        <div class="index">
          <div class="indexTextBox1">
            <span class="indexText1">助力“数字中国”建设</span>
            <span class="indexText2">Assist in the construction of "Digital China"</span>
          </div>
          <img class="indexImage" src="@/assets/image/index1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const indexData = ref(1)

const handleMouseIn = (index: number) => {
  indexData.value = index
}
</script>

<style scoped>
.my-swipe {
  display: none;
}
.menuBox {
  display: flex;
  height: 100vh;
}
.contentBox {
  flex-grow: 1; /* 右边内容占据剩余空间 */
  overflow-y: auto; /* 右边内容溢出时显示滚动条 */
}
.indexImage3 {
  width: 3vw;
}
.index {
  position: relative;
}
.imgBox {
  display: flex;
  margin: 5% 0;
}
.imgBox2 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 1vw;
  cursor: pointer;
}
.serviceContentLeft {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5% 0px;
}
.serviceContent {
  display: flex;
  margin: 4vw 1vw;
  justify-content: space-between;
  align-items: center;
}
.serviceTitle {
  border-bottom: 1px solid #7a7a7a2e;
}
.serviceTitleWord1 {
  font-size: 30px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: #2b2b2b;
  line-height: 40px;
}
.serviceTitleWord2 {
  font-size: 16px;
  font-family: SourceHanSansCN;
  color: #7a7a7a;
  line-height: 40px;
  padding-bottom: 19px;
}
.service {
  margin: 5% 3vw;
  width: 92%;
  height: 50%;
  background: #fff;
}
.indexImage2 {
  width: 100%;
  height: auto;
}

.imgBox2Text1 {
  font-size: 18px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: #2b2b2b;
}
.imgBox2Text2 {
  font-size: 16px;
  line-height: 27px;
  font-family: SourceHanSansCN;
  color: #7a7a7a;
  padding-top: 5px;
}
.indexTextBox1 {
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 55%;
  left: 8vw;
}
.indexTextBox2 {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 3.5vw;
  left: 8vw;
}
.indexImage2Span {
  font-size: 1.6vw;
  font-family: YouSheBiaoTiHei;
  font-weight: 400;
  color: #fefefe;
  line-height: 37px;
  position: absolute;
  top: 3vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.indexText1 {
  color: #fff;
  font-size: 3.6vw;
  font-family: YouSheBiaoTiHei;
}
.indexText2 {
  color: #fff;
  font-size: 2vw;
  font-family: SourceHanSansCN;
  font-weight: 400;
  width: 1300px;
}
.indexText3 {
  font-size: 2.3vw;
  font-weight: 600;
  color: #fff;
  font-family: SourceHanSansCN;
  display: inline-block;
  line-height: 5.8vw;
  position: relative;
  left: -30px;
}
.indexText4 {
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  display: inline-block;
  font-family: SourceHanSansCN;
  width: 88%;
}
.index {
  width: 100%;
  height: auto;
  max-height: 900px;
  overflow: hidden;
  position: relative;
}
.indexImage {
  width: 100%;
  height: auto;
}
.indexMore {
  position: absolute;
  top: 18vw;
  left: 8vw;
}
.indexMoreBox {
  border: 1px solid #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  padding: 5px;
}
.indexMoreText {
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #fff;
  line-height: 13px;
  padding-left: 10px;
}
.imgBoxCon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.indexMoreText2 {
  font-size: 20px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #fff;
  padding-right: 10px;
  position: relative;
  top: -2px;
}

a {
  text-decoration: none;
  color: #1c1c1c;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mindexImage {
  display: none;
}
.mindexImage2 {
  display: none;
}
@media screen and (max-width: 800px) {
  .headerBox {
    display: none;
  }
  .my-swipe {
    display: block;
  }
  .indexImage {
    display: none;
  }
  .mindexImage {
    display: block;
    width: 100%;
    height: auto;
    float: right;
  }
  .indexTextBox1 {
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 55%;
    left: 0;
    right: 0;
    text-align: center;
  }
  .indexText1 {
    font-size: 8.3vw;
    width: 100%;
  }
  .indexText2 {
    font-size: 3.8vw;
    width: 100%;
  }
  .imgBoxCon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .service {
    margin: 5% 4vw;
    width: 92%;
    height: 50%;
    background: #fff;
  }
  .serviceTitleWord1 {
    font-size: 24px;
  }
  .serviceTitleWord2 {
    font-size: 14px;
    padding-bottom: 10px;
  }
  .serviceContent {
    display: none;
    margin: 0vw 1vw;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .imgBox {
    display: flex;
    margin: 0 0;
    flex-direction: column;
    align-items: start;
  }
  .serviceContent {
    padding-bottom: 15px;
    border-bottom: 1px solid #7a7a7a2e;
  }

  .serviceContentLeft {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5% 0px;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }
  .serviceContentLeftBox {
    min-width: 500px;
    display: flex;
  }
  .indexImage3 {
    width: 56px;
    height: 56px;
    margin-right: 10px;
  }
  .imgBox2Text2 {
    font-size: 14px;
    line-height: 21px;
    color: #7a7a7a;
    padding-top: 5px;
    white-space: normal;
    text-align: start;
  }
  .indexImage2Span {
    font-size: 4.6vw;
    font-family: YouSheBiaoTiHei;
    font-weight: 400;
    color: #fefefe;
    line-height: 37px;
    position: absolute;
    top: 6vw;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mindexImage2 {
    display: block;
    width: 100%;
    height: 230px;
  }
  .imgBox2Text1 {
    text-align: start;
  }
  .indexTextBox2 {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    left: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .indexText3 {
    font-size: 5.3vw;
    font-weight: 600;
    color: #fff;
    font-family: SourceHanSansCN;
    display: inline-block;
    line-height: 5.8vw;
    position: relative;
    left: -2vw;
    top: 3vw;
  }
  .indexText4 {
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    display: inline-block;
    font-family: SourceHanSansCN;
    width: 88%;
    position: relative;
    left: -1vw;
    top: 6vw;
  }
  .indexMore {
    position: absolute;
    top: 33vw;
    left: 35vw;
  }
  .indexMoreBox {
    border: 1px solid #fff;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30vw;
    padding: 2px;
  }
  .my-swipe .van-swipe-item {
    font-size: 20px;
    text-align: center;
  }
}
</style>
