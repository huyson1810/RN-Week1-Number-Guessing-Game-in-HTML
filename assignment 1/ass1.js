<script>
    var random = 26;
    var turn = 3;
    var arr = new Array();

    function handle() {
        var num_user = document.getElementById("number").value;
        arr.push(num_user);
        turn--;
        var check = (num_user == random);
        document.getElementById("message").innerHTML = `<h3> ${check} </h3>`;
    }       
</script>
  //      <script type="text/javascript" src="./ass1.js"></script>
