$(function () {

  //加载时间
  showTime();

  var getRandomColor = function () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  console.log(getRandomColor())


  $(".jbts-percentage").circleChart({
    // color: getRandomColor(), // 进度条颜色
    backgroundColor: "rgba(51,78,136,.8)", // 进度条之外颜色rgba(0,50,20,.6)
    size: 80, // 圆形大小
    widthRatio: 0.2, // 进度条宽度
    text: 0, // 进度条内容
    textSize: 22,
    textWeight: "bold",
    textFamily: "arial",
    relativeTextSize: 1 / 5,
    startAngle: 180, // 进度条起点
    // counterclockwise: true, // 进度条反方向
    onDraw: function (el, circle) {
      circle.text(Math.round(circle.value) + "<span style='font-size:16px;'>%</span>");
    }
  });

  // '#00DEFF', '#00EB55', '#F91E34', '#FFAD00',


  $(".jbts1").circleChart({
    color: '#00DEFF', // 进度条颜色
  });
  $(".jbts2").circleChart({
    color: '#00EB55', // 进度条颜色
  });
  $(".jbts3").circleChart({
    color: '#F91E34', // 进度条颜色
  });
  $(".jbts4").circleChart({
    color: '#FFAD00', // 进度条颜色
  });


  // 粮库储备产量柱状图
  lkcb();

  // 粮库状态环状图
  lkzt();

  // 粮库销售额
  lkxse();

  function lkcb() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('lkcb-charts'));
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: '各粮食总量(万吨)',
        textStyle: {
          color: '#fff',
          fontSize: 16,
        },
        left: 20,
        top: 0,
      },
      tooltip: {},
      grid: {
        top: 40,
        left: '0',
        right: '3px',
        bottom: '0px',
        containLabel: true
      },
      xAxis: {

        data: ["小麦", "稻谷", "玉米", "菜油"],
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#0099ff'
          }
        },

      },
      yAxis: {
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#0099ff'
          }
        },
        splitLine: {
          show: false
        },
      },
      series: [{
        name: '粮库种类',
        type: 'bar',
        // 圆柱最大宽度
        barMaxWidth: 60,
        data: [52.61, 71.44, 18.05, 32.01],
        itemStyle: {
          normal: {
            // 圆柱颜色配置
            color: function (params) {
              var colorList = [
                '#00DEFF', '#00EB55', '#F91E34', '#FFAD00',
                // '#6497ef', '#85802b', '#D7504B', '#C6E579',
                // '#F4E001', '#F0805A', '#26C0C0'
              ];
              return colorList[params.dataIndex]
            },
            label: {
              show: true, //开启显示
              position: 'top', //在上方显示
              textStyle: { //数值样式
                color: 'white',
                fontSize: 16
              }
            }
          },
        },
      }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  function lkcb2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('lkcb-charts'));
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: '各粮食总量(万吨)',
        textStyle: {
          color: '#fff',
          fontSize: 16,
        },
        left: 20,
        top: 0,
      },
      tooltip: {},
      grid: {
        top: 40,
        left: '0',
        right: '3px',
        bottom: '0px',
        containLabel: true
      },
      xAxis: {

        data: ["小麦", "稻谷", "玉米", "菜油"],
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#0099ff'
          }
        },

      },
      yAxis: {
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#0099ff'
          }
        },
        splitLine: {
          show: false
        },
      },
      series: [{
        name: '粮库种类',
        type: 'bar',
        // 圆柱最大宽度
        barMaxWidth: 60,
        data: [32.61, 41.04, 19.05, 22.01],
        itemStyle: {
          normal: {
            // 圆柱颜色配置
            color: function (params) {
              var colorList = [
                '#00DEFF', '#00EB55', '#F91E34', '#FFAD00',
                // '#6497ef', '#85802b', '#D7504B', '#C6E579',
                // '#F4E001', '#F0805A', '#26C0C0'
              ];
              return colorList[params.dataIndex]
            },
            label: {
              show: true, //开启显示
              position: 'top', //在上方显示
              textStyle: { //数值样式
                color: 'white',
                fontSize: 16
              }
            }
          },
        },
      }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }



  function lkzt() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('lkzt-charts'));
    // 指定图表的配置项和数据
    var color = ['#fb734e', '#e32f46', '#94d96c', '#0bbcb7', '#1a9bfc', '#7049f0'];
    var dataStyle = {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        shadowBlur: 40,
        borderWidth: 10,
        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
      }
    };
    var placeHolderStyle = {
      normal: {
        color: '#393d50',
        label: {
          show: false
        },
        labelLine: {
          show: false
        }
      },
      emphasis: {
        color: '#393d50'
      }
    };
    option = {
      // backgroundColor: '#142058',
      title: {
        text: '',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 24,
          color: "#fff",
        }
      },
      // tooltip: {
      //   trigger: 'item',
      //   show: true,
      //   // formatter: "{b} : <br/>{d}%",
      //   backgroundColor: 'rgba(0,0,0,0.7)', // 背景
      //   padding: [8, 10], //内边距
      //   extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
      // },
      legend: {
        orient: 'vertical',
        // icon: 'circle',
        left: '20',
        top: '100',
        itemGap: 20,
        data: ['2002年 22500吨', '2004年 20500吨', '2006年 43000吨', '04', '05', '06'],
        textStyle: {
          color: '#fft'
        }
      },
      series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        // 饼图半径
        radius: [90, 100],
        center: ['70%', '50%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        startAngle: 90,
        label: {
          borderRadius: '10',
        },
        data: [{
          value: 54.6,
          name: '2006年 43000吨',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: color[0]
              }, {
                offset: 1,
                color: color[1]
              }])
            }
          }
        },
        {
          value: 45.4,
          name: '',
          tooltip: {
            show: false
          },
          itemStyle: placeHolderStyle
        },
        ]
      },
      {
        name: 'Line 2',
        type: 'pie',
        clockWise: false,
        radius: [75, 85],
        center: ['70%', '50%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        startAngle: 90,
        data: [{
          value: 56.7,
          name: '2004年 20500吨',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: color[2]
              }, {
                offset: 1,
                color: color[3]
              }])
            }
          }
        },
        {
          value: 43.3,
          name: '',
          tooltip: {
            show: false
          },
          itemStyle: placeHolderStyle
        },
        ]
      },
      {
        name: 'Line 3',
        type: 'pie',
        clockWise: false,
        radius: [60, 70],
        center: ['70%', '50%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        startAngle: 90,
        data: [{
          value: 30,
          name: '2002年 22500吨',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: color[4]
              }, {
                offset: 1,
                color: color[5]
              }]),
            }
          }
        },
        {
          value: 53,
          name: '',
          tooltip: {
            show: false
          },
          itemStyle: placeHolderStyle
        },
        ]
      }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  function lkxse() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('lkxse-charts'));
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: '亿元',
        left: '30px',
        top: '20px',
        textAlign: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 14,
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#ddd'
          }
        },
        backgroundColor: 'rgba(0,0,0,.5)',
        padding: [5, 10],
        textStyle: {
          color: '#7588E4',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)',

      },
      legend: {
        right: 20,
        // 设置垂直放置
        // orient: 'vertical',
        data: [{
          name: '2017',
          textStyle: {
            color: '#fff'
          }
        }, {
          name: '2018',
          textStyle: {
            color: '#fff'
          }
        }]
      },
      xAxis: {
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        boundaryGap: false,
        // splitLine: {
        //   show: true,
        //   interval: 'auto',
        //   lineStyle: {
        //     color: ['#D4DFF5']
        //   }
        // },
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#609ee9'
          }
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14,
            color: '#fff'
          }
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: ['#D4DFF5']
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#609ee9'
          }
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14,
            color: '#fff'
          }
        }
      },
      series: [{
        name: '2017',
        type: 'line',
        // smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        data: ['3', '5', '6', '12', '13', '12', '30', '8', '10', '3', '5', '7'],
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(199, 237, 250,0.5)'
            }, {
              offset: 1,
              color: 'rgba(199, 237, 250,0.2)'
            }], false)
          }
        },
        itemStyle: {
          normal: {
            color: '#f7b851'
          }
        },
        lineStyle: {
          normal: {
            width: 3
          }
        }
      }, {
        name: '2018',
        type: 'line',
        // smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: ['5', '5', '8', '7', '15', '13', '17', '9', '9', '5', '6', '9'],
        are1aStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(216, 244, 247,1)'
            }, {
              offset: 1,
              color: 'rgba(216, 244, 247,1)'
            }], false)
          }
        },
        itemStyle: {
          normal: {
            color: '#58c8da'
          }
        },
        lineStyle: {
          normal: {
            width: 3
          }
        }
      }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }


  // $('.place').on('.hover', 'nanchong', function () {
  //   $(this).prev(".detail").show();
  // }, function () {
  //   $(this).prev(".detail").hide();
  // })

  // $(".nanchong").hover(function () {
  //   // var href = $(this).attr('href');
  //   $(this).prev(".detail").show();
  // }, function () {
  //   $(this).prev(".detail").hide();
  // });


  // $(".placebox").hover(function () {
  //   var href = $(this).attr('href');
  //   $(this).find(".detail").show();
  // }, function () {
  //   $(this).find(".detail").hide();
  // });





  // 粮库种类下拉菜单
  $('.dropdown-content a').on('click', function () {
    $(this).parent().prev('.dropbtn').find('strong').text($(this).text())
  })

  $('a.zycb').on('click', function () {
    $('.circle_data.zycb').show()
    $('.circle_data.sjcb').hide()
    lkcb()
  })


  $('a.sjcb').on('click', function () {
    $('.circle_data.zycb').hide()
    $('.circle_data.sjcb').show()
    lkcb2()
  })


  //点击地点显示详情
  $(".pointer").on('click', function () {
    $(this).siblings('.detail').show()
  })

  $('.icon_close').on('click', function () {
    console.log($(this).parent())
    $(this).parent().css('display', 'none');
  })

  // 显示隐藏天气
  $('.view_weather').on('click', function () {
    $('.weather').toggleClass('visibility')
  })


  // 联运  迁徙切换
  $('.notice.qianxi').on('click', function () {
    $('.qianxi').hide()
    $('.lianyun').show()
  })

  $('.notice.lianyun').on('click', function () {
    $('.qianxi').show()
    $('.lianyun').hide()
  })


})












//获得当前时间,刻度为一千分一秒
var initializationTime = (new Date()).getTime();

function showTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  $("#showTime").html("<span>" + year + "</span>年<span>" + Appendzero(month) + "</span>月<span>" + Appendzero(day) + "</span>日 <span>" + Appendzero(hours) + ":" + Appendzero(minutes) + ":" + Appendzero(seconds) + "</span>");
  //一秒刷新一次显示时间
  var timeID = setTimeout(showTime, 1000);
}

function Appendzero(obj) {
  if (obj < 10) return "0" + obj;
  else return obj;
}
