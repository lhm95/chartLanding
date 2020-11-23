// var secChart01 = document.getElementById('sec-01-chart').getContext('2d');
// var chart = new Chart(secChart01, {
//     type: 'pie',
//     data: {
//         labels: ['여성', '남성'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: ['rgb(237, 125, 49)', "rgb(0, 85, 255)"],
//             data: [3, 10]
//         }]
//     },
//     options: {}
// });

var secChart0201 = document.getElementById('sec-02-chart-01').getContext('2d');
var chart = new Chart(secChart0201, {
    type: 'doughnut',
    data: {
        label: '여성',
        labels: ['긍정', '부정'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgb(237, 125, 49)', "rgb(0, 85, 255)"],
            data: [3, 10]
        }]
    },
    options: {}
});

var secChart0202 = document.getElementById('sec-02-chart-02').getContext('2d');
var chart = new Chart(secChart0202, {
    type: 'doughnut',
    label: '남성',
    data: {
        labels: ['긍정', '부정'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgb(237, 125, 49)', "rgb(0, 85, 255)"],
            data: [3, 10]
        }]
    },
    options: {}
});

// var secChart03 = document.getElementById('sec-03-chart').getContext('2d');
// var chart = new Chart(secChart03, {
//     type: 'pie',
//     data: {
//         labels: ['여성', '남성'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: ['rgb(237, 125, 49)', "rgb(0, 85, 255)"],
//             data: [3, 10]
//         }]
//     },
//     options: {}
// });

// var secChart04 = document.getElementById('sec-04-chart').getContext('2d');
// var chart = new Chart(secChart04, {
//     type: 'pie',
//     data: {
//         labels: ['여성', '남성'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: ['rgb(237, 125, 49)', "rgb(0, 85, 255)"],
//             data: [3, 10]
//         }]
//     },
//     options: {}
// });

// var secChart05 = document.getElementById('sec-05-chart').getContext('2d');
// var chart = new Chart(secChart05, {
//     type: 'pie',
//     data: {
//         labels: ['여성', '남성'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: ['rgb(237, 125, 49)', "rgb(0, 85, 255)"],
//             data: [3, 10]
//         }]
//     },
//     options: {}
// });


var labelArray = ["정치", "과학","문화","경제","사회"],
    positiveData01 = [55, 82, 24, 24,54],
    negativeData01 = [27, 10, 56,43,12];
var secChart06 = document.getElementById('sec-06-chart').getContext('2d');
var chart = new Chart(secChart06, {
  type: 'bar',
  data: {
    labels: labelArray,
    datasets: [{
        label: '긍정적 %',
        data: positiveData01,
        backgroundColor: 'rgb(0, 85, 255)',
        borderColor: 'rgb(0, 85, 255)',
      },
      {
        label: '부정적 %',
        data: negativeData01,
        backgroundColor: 'rgb(237, 125, 49)',
        borderColor: 'rgb(237, 125, 49)',
      }
    ]
  },
  options: {
    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true
      }]
    },
    plugins: {
      datalabels: {
        color: 'white',
        font: {
          weight: 'bold'
        },
        formatter: function(value, context) {
          return Math.round(value) + '%';
        }
      }
    }
  }
});

var labelArray = ["정치", "과학","문화","경제","사회"],
    positiveData02 = [55, 82, 24, 24,54],
    negativeData02 = [27, 10, 56,43,12];
var secChart07 = document.getElementById('sec-07-chart').getContext('2d');
var chart = new Chart(secChart07, {
  type: 'bar',
  data: {
    labels: labelArray,
    datasets: [{
        label: '긍정적 %',
        data: positiveData02,
        backgroundColor: 'rgb(0, 85, 255)',
        borderColor: 'rgb(0, 85, 255)',
      },
      {
        label: '부정적 %',
        data: negativeData02,
        backgroundColor: 'rgb(237, 125, 49)',
        borderColor: 'rgb(237, 125, 49)',
      }
    ]
  },
  options: {
    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true
      }]
    },
    plugins: {
      datalabels: {
        color: 'white',
        font: {
          weight: 'bold'
        },
        formatter: function(value, context) {
          return Math.round(value) + '%';
        }
      }
    }
  }
});


var secChart08 = document.getElementById('sec-08-chart').getContext('2d');
var chart = new Chart(secChart08, {
    type: 'pie',
    data: {
        labels: ['여성', '남성'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgb(237, 125, 49)', "rgb(0, 85, 255)"],
            data: [3, 10]
        }]
    },
    options: {}
});

var secChart09 = document.getElementById('sec-09-chart').getContext('2d');
var chart = new Chart(secChart09, {
    type: 'line',
    data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '여성',
            backgroundColor: ['rgb(237, 125, 49)'],
            borderColor: 'rgb(237, 125, 49)',
            data: [5, 3, 3, 4, 5, 6, 7, 8, 20, 4, 20],
            fill: false
        }, {
            label: '남성',
            backgroundColor: ["rgb(0, 85, 255)"],
            borderColor: "rgb(0, 85, 255)",
            data: [20, 13, 33, 64, 35, 16, 7, 8, 20, 4, 20],
            fill: false
        }]
    },
    options: {}
});

var secChart10 = document.getElementById('sec-10-chart').getContext('2d');
var chart = new Chart(secChart10, {
    type: 'line',
    data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '여성',
            backgroundColor: ['rgb(237, 125, 49)'],
            borderColor: 'rgb(237, 125, 49)',
            data: [20, 13, 33, 64, 35, 16, 7, 8, 20, 4, 20],
            fill: false
        }, {
            label: '남성',
            backgroundColor: ["rgb(0, 85, 255)"],
            borderColor: "rgb(0, 85, 255)",
            data: [5, 3, 3, 4, 5, 6, 7, 8, 20, 4, 20],
            fill: false
        }]
    },
    options: {}
});

(function (global, $) {
  var $menu = $('.floating-menu li.m'),
      $contents = $('.scroll'),
      $doc = $('html, body');
  $(function () {
      $menu.on('click', 'a', function (e) {
          var $target = $(this).parent(),
              idx = $target.index(),
              section = $contents.eq(idx),
              offsetTop = section.offset().top;
          $doc.stop()
              .animate({
                  scrollTop: offsetTop
              }, 800);
          return false;
      });
  });
  
  $(window).scroll(function () {
      var scltop = $(window).scrollTop();
      $.each($contents, function (idx, item) {
          var $target = $contents.eq(idx),
              i = $target.index(),
              targetTop = $target.offset().top;

          if (targetTop <= scltop) {
              $menu.removeClass('on');
              $menu.eq(idx).addClass('on');
          }
          if (!(0 <= scltop)) {
              $menu.removeClass('on');
          }
      })
  });
}(window, window.jQuery));

$(function(){
  $(".gnb_btn").click(function(){
    $(".gnb").addClass("on");
  })
  $(".gnb p").click(function(){
    $(".gnb").removeClass("on");
  })

});