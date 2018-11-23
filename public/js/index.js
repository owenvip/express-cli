'use strict';
$(function () {
	/**
	 * 饼图
	 */
	(function () {
		var eles = document.querySelectorAll("#main .global .item .canvas");
		var base = {
			title: {
				text: '80%',
				x: 'center',
				y: 'center',
				textStyle: {
					fontWeight: 'normal',
					color: '#3d3d3d',
					fontSize: '16'
				}
			},
			color: ['rgba(176, 212, 251, 1)'],

			series: [{
				name: 'Line 1',
				type: 'pie',
				clockWise: true,
				radius: ['50%', '66%'],
				itemStyle: {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					}
				},
				hoverAnimation: false,
				data: [{
					value: 80,
					itemStyle: {
						normal: {
							color: { // 完成的圆环的颜色
								colorStops: [{
									offset: 0,
									color: '#3fb7f7' // 0% 处的颜色
								}]
							},
							label: {
								show: false
							},
							labelLine: {
								show: false
							}
						}
					}
				}, {
					value: 20,
					itemStyle: {
						normal: {
							color: { // 完成的圆环的颜色
								colorStops: [{
									offset: 0,
									color: '#FFF' // 0% 处的颜色
								}]
							},
							label: {
								show: false
							},
							labelLine: {
								show: false
							}
						}
					}
				}]
			}]
		};
		var options = [{
			title: {
				text: '3.7\n亿条'
			},
			series: [{
				data: [{
					value: 100
				}, {
					value: 0
				}]
			}]
		}, {
			title: {
				text: '2,717\n条'
			},
			series: [{
				data: [{
					value: 100
				}, {
					value: 0
				}]
			}]
		}, {
			title: {
				text: '979\n万条'
			},
			series: [{
				data: [{
					value: 100
				}, {
					value: 0
				}]
			}]
		}];
		for (var i = 0; i < options.length; i++) {
			echarts.init(eles[i]).setOption($.extend(true, {}, base, options[i]), true);
		}

	})();
});