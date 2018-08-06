/**
 * 
 * @param {type} radius Բ���뾶
 * @param {type} lineWidth Բ�����
 * @param {type} strokeStyle Ĭ�ϱ���
 * @param {type} fillStyleArray ���飬Բ��ɫ����ɫ
 * @param {type} capType ���ͣ�round��Բ�ǣ�square�����ζ�ñ��butt������
 * @returns {Circle} criclex��cricleyԲ������
 * author haorooms
 * 
 */
function Circle(radius, lineWidth, strokeStyle, fillStyleArray, capType) {
    this.radius = radius;    // Բ���뾶
    this.lineWidth = lineWidth;  // Բ���ߵĿ��
    this.strokeStyle = strokeStyle; //�ߵ���ɫ
    this.fillStyle = fillStyleArray;  //���ɫ
    this.lineCap = capType;
}
Circle.prototype.draw = function (ctx,criclex,cricley) {
    ctx.beginPath();
    ctx.arc(criclex, cricley, this.radius, 0, Math.PI * 2, true);  // ����Ϊ90��Բ��������ʼ�Ƕ���0�������Ƕ���Math.PI*2
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.strokeStyle;
    ctx.stroke();  // ������stroke��һ������Բ���������ɫ��ͯЬ������fill����
};
function Ring(radius, lineWidth, strokeStyle, fillStyleArray, capType) {
    Circle.call(this, radius, lineWidth, strokeStyle, fillStyleArray, capType);
}
Ring.prototype = Object.create(Circle.prototype);

Ring.prototype.drawRing = function (ctx, startAngle, percentArray ,criclex,cricley) {
    startAngle = startAngle || 3 * Math.PI / 2;
    percentArray = percentArray || [];
    this.draw(ctx,criclex,cricley);  // ����Circle��draw������ȦȦ
    var _this = this;
    // angle
    percentArray.forEach(function (item, index) {
        ctx.beginPath();
        var anglePerSec = 2 * Math.PI / (100 / item); // ��ɫ�Ļ���
        ctx.arc(criclex, cricley, _this.radius, startAngle, startAngle + anglePerSec, false); //�����Բ������Ҫ��cirle�ı���һ��
        startAngle = startAngle + anglePerSec;
        ctx.strokeStyle = _this.fillStyle[index];
        ctx.lineCap = _this.lineCap;
        ctx.stroke();
        ctx.closePath();
    })
    //СԲȦ����
    ctx.beginPath();
    ctx.arc(criclex, cricley, _this.radius, startAngle, startAngle, false); //�����Բ������Ҫ��cirle�ı���һ��
    ctx.strokeStyle = _this.fillStyle[0];
    ctx.lineCap = _this.lineCap;
    ctx.stroke();
    ctx.closePath();
}