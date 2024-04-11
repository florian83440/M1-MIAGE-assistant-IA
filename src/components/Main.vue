<template>
  <div class="mainContent">
    <div class="screenPrint">
      <div class="mainTitle">MIAGE GPT</div>
      <div class="mainPrint" style="display: none;"></div>
    </div>
    <div class="field is-grouped entryText">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Type your question..." id="inputPrint">
      </p>
      <p class="control">
        <button class="button" style="background-color: rgb(36, 123, 136); color: white" id="btnSendRequest">
          Send
        </button>
      </p>
    </div>
  </div>
</template>

<style scoped>
.mainContent{
  height: 100vh;
}
.screenPrint{
  height: 93vh;
}
.entryText{
  height: 7vh;
  right: 5%;
  border-top: 1px solid rgba(36, 123, 136, 0.2);
  padding-top: 15px;
  margin: 0px 5%;
}
.entryText input{
  margin-left: 10%;
  width: 80%;
}
div.mainTitle{
  font-size: xx-large;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 60%;
  width: 200px;
  height: 60px;
  line-height: 60px;
  margin-left: -100px;
  margin-top: -30px;
  text-align: center;
}
div.mainPrint{
  margin: 0px 5%;
  position: absolute;
  bottom: 10%;
  line-height: 60px;
  text-align: center;
}
</style>