<!-- lightly modified spinner from https://github.com/loadingio/css-spinner/ -->
<style>
  .lds-dual-ring {
    display: block;
    width: 30px;
    height: 30px;
    margin: auto;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 30px;
    height: 30px;
    margin: 8px;
    border-radius: 50%;
    border: 4px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.5s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="lds-dual-ring" />
