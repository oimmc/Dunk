!(function (t, i) {
	"object" == typeof exports && "undefined" != typeof module
		? (module.exports = i())
		: "function" == typeof define && define.amd
		? define(i)
		: ((t =
				"undefined" != typeof globalThis
					? globalThis
					: t || self).Shoot = i());
})(this, function () {
	"use strict";
	var t = (function () {
			function t(t) {
				var i = t.el;
				(this.el = document.querySelector(i)),
					(this.ctx = this.el.getContext("2d")),
					(this.el.width = 375),
					(this.el.height = 300),
					(this.el.style.background = "#ddd"),
					(this.el.style.border = "1px solid #bbb"),
					(this.el.style.display = "block"),
					(this.el.style.margin = "0 auto");
			}
			return (
				Object.defineProperty(t.prototype, "width", {
					get: function () {
						return this.el.width;
					},
					set: function (t) {
						this.el.width = t;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "height", {
					get: function () {
						return this.el.height;
					},
					set: function (t) {
						this.el.height = t;
					},
					enumerable: !1,
					configurable: !0,
				}),
				(t.prototype.getCtx = function () {
					return this.ctx;
				}),
				(t.prototype.bezierElliptic = function (t, i, s, h, e, n, o) {
					void 0 === e && (e = 0.5),
						void 0 === n && (n = 0.8),
						void 0 === o && (o = !1);
					var c = e * s,
						r = n * h;
					this.ctx.save(),
						this.ctx.translate(t, i),
						this.ctx.rotate((-5 * Math.PI) / 180),
						this.ctx.beginPath(),
						this.ctx.moveTo(0, h),
						this.ctx.bezierCurveTo(c, h, s, r, s, 0),
						this.ctx.bezierCurveTo(s, -r, c, -h, 0, -h),
						this.ctx.bezierCurveTo(-c, -h, -s, -r, -s, 0),
						this.ctx.bezierCurveTo(-s, r, -c, h, 0, h),
						this.ctx.closePath(),
						o ? this.ctx.fill() : this.ctx.stroke(),
						this.ctx.restore();
				}),
				(t.prototype.clearRect = function () {
					this.ctx.clearRect(0, 0, this.width, this.height);
				}),
				t
			);
		})(),
		i = (function () {
			function t(t) {
				var i = t.canvas;
				(this.canvas = i),
					(this.ctx = this.canvas.getCtx()),
					this.draw();
			}
			return (
				(t.prototype.draw = function () {
					this.drawGround(), this.drawBoard(), this.drawBasketRing();
				}),
				(t.prototype.drawGround = function () {
					this.ctx.beginPath(),
						this.ctx.moveTo(0, 298),
						this.ctx.lineTo(this.canvas.width, 280),
						this.ctx.stroke();
				}),
				(t.prototype.drawBoard = function () {
					this.ctx.save(),
						this.ctx.beginPath(),
						this.ctx.moveTo(180, 10),
						this.ctx.lineTo(180, 80),
						this.ctx.lineTo(280, 70),
						this.ctx.lineTo(280, 0),
						this.ctx.lineTo(180, 10),
						this.ctx.moveTo(210, 65),
						this.ctx.lineTo(252, 61),
						this.ctx.lineTo(252, 28),
						this.ctx.lineTo(210, 32),
						this.ctx.lineTo(210, 65),
						this.ctx.stroke(),
						this.ctx.restore();
				}),
				(t.prototype.drawBasketRing = function () {
					this.canvas.bezierElliptic(215, 60, 20, 4);
				}),
				t
			);
		})(),
		s = (function () {
			function t(t) {
				(this.head_x = 38),
					(this.head_y = 184),
					(this.body_x = 30),
					(this.body_y = 196),
					(this.arm_r_end_x = 46),
					(this.arm_l_end_x = 48),
					(this.x1 = 41),
					(this.y1 = 246),
					(this.x2 = 198),
					(this.y2 = 128),
					(this.cx1 = 186),
					(this.cy1 = 254),
					(this.cx2 = 120),
					(this.cy2 = 27),
					(this.t = 0);
				var i = t.canvas;
				(this.canvas = i), (this.ctx = this.canvas.getCtx());
			}
			return (
				(t.prototype.init = function () {
					(this.t = 0),
						(this.head_x = 38),
						(this.head_y = 184),
						(this.body_x = 30),
						(this.body_y = 196),
						(this.arm_l_end_x = 48),
						(this.arm_r_end_x = 46);
				}),
				(t.prototype.draw = function () {
					if (this.t > 1) return this.init();
					this.canvas.bezierElliptic(38, 184, 10, 10),
						(this.ctx.fillStyle = "red"),
						this.canvas.bezierElliptic(40, 216, 10, 20, 1, 0.9, !0),
						(this.ctx.fillStyle = "#007fff"),
						this.canvas.bezierElliptic(42, 243, 9, 6, 1, 1, !0),
						(this.ctx.lineCap = "round"),
						(this.ctx.lineJoin = "round"),
						this.ctx.beginPath(),
						this.arm_l_end_x > 54 && (this.arm_l_end_x = 54),
						this.ctx.moveTo(48, 200),
						this.ctx.lineTo(52, 196),
						this.ctx.lineTo(this.arm_l_end_x, 176),
						this.ctx.moveTo(42, 206),
						this.ctx.lineTo(56, 200),
						this.arm_r_end_x > 56 && (this.arm_r_end_x = 56),
						this.ctx.lineTo(this.arm_r_end_x, 175),
						this.ctx.stroke(),
						(this.ctx.lineCap = "round"),
						(this.ctx.lineJoin = "round"),
						this.ctx.beginPath(),
						this.ctx.moveTo(40, 251),
						this.ctx.lineTo(40, 270),
						this.ctx.lineTo(28, 292),
						this.ctx.lineTo(32, 292),
						this.ctx.moveTo(45, 251),
						this.ctx.lineTo(48, 270),
						this.ctx.lineTo(44, 292),
						this.ctx.lineTo(48, 292),
						this.ctx.stroke(),
						(this.arm_l_end_x += 12),
						(this.arm_r_end_x += 12);
				}),
				(t.prototype.move = function () {
					this.draw(), (this.t += 0.06);
				}),
				t
			);
		})(),
		h = (function () {
			function t(t) {
				(this.x = 60),
					(this.y = 165),
					(this.x1 = 60),
					(this.y1 = 165),
					(this.cx1 = 60),
					(this.cy1 = 80),
					(this.cx2 = 270),
					(this.cy2 = -40),
					(this.x2 = 215),
					(this.y2 = 130),
					(this.t = 0);
				var i = t.canvas;
				(this.canvas = i), (this.ctx = this.canvas.getCtx());
			}
			return (
				(t.prototype.init = function () {
					(this.t = 0), (this.x = 60), (this.y = 170);
				}),
				(t.prototype.draw = function () {
					if (this.t > 1) return this.init();
					(this.x =
						this.x1 * Math.pow(1 - this.t, 3) +
						3 * this.cx1 * this.t * Math.pow(1 - this.t, 2) +
						3 * this.cx2 * Math.pow(this.t, 2) * (1 - this.t) +
						this.x2 * Math.pow(this.t, 3)),
						(this.y =
							this.y1 * Math.pow(1 - this.t, 3) +
							3 * this.cy1 * this.t * Math.pow(1 - this.t, 2) +
							3 * this.cy2 * Math.pow(this.t, 2) * (1 - this.t) +
							this.y2 * Math.pow(this.t, 3)),
						this.ctx.beginPath(),
						this.ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI),
						(this.ctx.fillStyle = "#633"),
						this.ctx.fill(),
						(this.ctx.strokeStyle = "#339966"),
						this.ctx.stroke(),
						(this.ctx.strokeStyle = "#000");
				}),
				(t.prototype.move = function () {
					this.draw(), (this.t += 0.06);
				}),
				t
			);
		})();
	return (function () {
		function e() {
			(this.canvas = new t({ el: "canvas" })), this.init(), this.draw();
		}
		return (
			(e.prototype.init = function () {
				(this.rebound = new i({ canvas: this.canvas })),
					(this.guy = new s({ canvas: this.canvas })),
					(this.ball = new h({ canvas: this.canvas }));
			}),
			(e.prototype.draw = function () {
				var t = this;
				setInterval(function () {
					t.canvas.clearRect(),
						t.ball.move(),
						t.rebound.draw(),
						t.guy.move();
				}, 200);
			}),
			e
		);
	})();
});
