var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var demo = new Vue({
  el: "#demo",
  data: {
    gridColumns: ["name", "phone", "email", "address"],
    gridData: [{
        name: "name 1",
        phone: "+232323222",
        email: "fff@example.com",
        address: "wxyz",
        disabled: true
      },
      {
        name: "name 2",
        phone: "+73849869485",
        email: "sss@example.com",
        address: "pqrst",
        disabled: true
      },
      {
        name: "name 3",
        phone: "+12312311222",
        email: "ddd@example.com",
        address: "abcd",
        disabled: true
      },
      {
        name: "name 4",
        phone: "+12222223232",
        email: "ccc@example.com",
        address: "lmno",
        disabled: true
      }
    ]
  },
  methods: {
    addRow: function(index) {
      var newData = {
        name: "",
        phone: "",
        email: "",
        address: "",
        disabled: false
      };
      if (index == null) {
        this.gridData.push(newData);
      } else {
        this.gridData.splice(index + 1, 0, newData);
      }
    },
    deleteRow: function(index) {
      this.gridData.splice(index, 1);
    },
    editRow: function(index) {
      this.gridData[index].disabled = !this.gridData[index].disabled;
    },
    prettyJSON: function(json) {
      if (json) {
        json = JSON.stringify(json, undefined, 4);
        json = json
          .replace(/&/g, "&")
          .replace(/</g, "<")
          .replace(/>/g, ">");
        return json.replace(
          /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
          function(match) {
            var cls = "number";
            if (/^"/.test(match)) {
              if (/:$/.test(match)) {
                cls = "key";
              } else {
                cls = "string";
              }
            } else if (/true|false/.test(match)) {
              cls = "boolean";
            } else if (/null/.test(match)) {
              cls = "null";
            }
            return '<span class="' + cls + '">' + match + "</span>";
          }
        );
      }
    }
  }
});
