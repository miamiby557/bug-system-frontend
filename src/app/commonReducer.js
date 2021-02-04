const initialState = {
    cevaColumns: [
        {value: 'extraService', label: '额外服务'},
        {value: 'orderNo', label: '订单编号',clickable:true},
        {value: 'createTime', label: '订单日期', type: 'dateTime'},
        {value: 'receiveMan', label: '收件人'},
        {value: 'receivePhone', label: '收件人电话号码'},
        {value: 'receiveManId', label: '收货人身份证号码'},
        {value: 'receiveProvince', label: '省'},
        {value: 'receiveCity', label: '市'},
        {value: 'receiveArea', label: '区'},
        {value: 'receiveAddress', label: '收件人地址'},
        {value: 'receiveAddress2', label: '收件人地址2'},
        {value: 'productLink', label: '产品链接'},
        {value: 'productName', label: '商品名称'},
        {value: 'productChineseName', label: '商品中文名称'},
        {value: 'sizeMode', label: '规格型号'},
        {value: 'count', label: '数量', type: 'number'},
        {value: 'netWeight', label: '净重', type: 'number'},
        {value: 'productCode', label: '商品货号'},
        {value: 'unit', label: '单位'},
        {value: 'price', label: '产品单价', type: 'money'},
        {value: 'transportFee', label: '运费', type: 'money'},
        {value: 'tax', label: '税金', type: 'money'},
        {value: 'totalAmount', label: '总价', type: 'money'},
        {value: 'currencyType', label: '币别'},
        {value: 'remark', label: '备注'},
        {value: 'trackingCode', label: 'UPS'},
        {value: 'sku', label: 'sku'},
        {value: 'brand', label: '品牌'},
        {value: 'originCountry', label: '原产国'},
        {value: 'barCode', label: '商品条形码'},
        {value: 'deliveryCompany', label: '发货人'},
        {value: 'deliveryAddress', label: '发货人地址'},
        {value: 'deliveryCity', label: '发件人城市'},
        {value: 'deliveryMan', label: '联系电话'},
        {value: 'deliveryPhone', label: '联系人'}
    ],
    cevaInColumns: [
        {value: 'orderNo', label: '订单编号',clickable:true},
        {value: 'createTime', label: '入库日期', type: 'dateTime'},
        {value: 'receiveMan', label: '收件人'},
        {value: 'receivePhone', label: '收件人电话号码'},
        {value: 'receiveManId', label: '收货人身份证号码'},
        {value: 'receiveProvince', label: '省'},
        {value: 'receiveCity', label: '市'},
        {value: 'receiveArea', label: '区'},
        {value: 'receiveAddress', label: '收件人地址'},
        {value: 'receiveAddress2', label: '收件人地址2'},
        {value: 'productLink', label: '产品链接'},
        {value: 'productName', label: '商品名称'},
        {value: 'productChineseName', label: '商品中文名称'},
        {value: 'sizeMode', label: '规格型号'},
        {value: 'count', label: '数量', type: 'number'},
        {value: 'netWeight', label: '净重', type: 'number'},
        {value: 'productCode', label: '商品货号'},
        {value: 'unit', label: '单位'},
        {value: 'remark', label: '备注'},
        {value: 'trackingCode', label: 'UPS'},
        {value: 'sku', label: 'sku'},
        {value: 'brand', label: '品牌'},
        {value: 'originCountry', label: '原产国'},
        {value: 'barCode', label: '商品条形码'},
        {value: 'deliveryCompany', label: '发货人'},
        {value: 'deliveryAddress', label: '发货人地址'},
        {value: 'deliveryCity', label: '发件人城市'},
        {value: 'deliveryMan', label: '联系电话'},
        {value: 'deliveryPhone', label: '联系人'},
        {value: 'operator', label: '操作人'},
        {value: 'inRemark', label: '入库备注'}
    ],
    cevaOutColumns: [
        {value: 'orderNo', label: '订单编号',clickable:true},
        {value: 'createTime', label: '出库日期', type: 'dateTime'},
        {value: 'receiveMan', label: '收件人'},
        {value: 'receivePhone', label: '收件人电话号码'},
        {value: 'receiveManId', label: '收货人身份证号码'},
        {value: 'receiveProvince', label: '省'},
        {value: 'receiveCity', label: '市'},
        {value: 'receiveArea', label: '区'},
        {value: 'receiveAddress', label: '收件人地址'},
        {value: 'receiveAddress2', label: '收件人地址2'},
        {value: 'productLink', label: '产品链接'},
        {value: 'productName', label: '商品名称'},
        {value: 'productChineseName', label: '商品中文名称'},
        {value: 'sizeMode', label: '规格型号'},
        {value: 'count', label: '数量', type: 'number'},
        {value: 'netWeight', label: '净重', type: 'number'},
        {value: 'productCode', label: '商品货号'},
        {value: 'unit', label: '单位'},
        {value: 'remark', label: '备注'},
        {value: 'trackingCode', label: 'UPS'},
        {value: 'sku', label: 'sku'},
        {value: 'brand', label: '品牌'},
        {value: 'originCountry', label: '原产国'},
        {value: 'barCode', label: '商品条形码'},
        {value: 'deliveryCompany', label: '发货人'},
        {value: 'deliveryAddress', label: '发货人地址'},
        {value: 'deliveryCity', label: '发件人城市'},
        {value: 'deliveryMan', label: '联系电话'},
        {value: 'deliveryPhone', label: '联系人'},
        {value: 'operator', label: '操作人'},
        {value: 'inRemark', label: '出库备注'}
    ],
    productColumns:[
        {value: 'sizeMode', label: '规格型号'},
        {value: 'productCode', label: '商品货号'},
        {value: 'productLink', label: '产品链接'},
        {value: 'productName', label: '商品名称'},
        {value: 'productChineseName', label: '商品中文名称'},
        {value: 'count', label: '数量', type: 'number'},
        {value: 'netWeight', label: '净重', type: 'number'},
        {value: 'unit', label: '单位'},
        {value: 'price', label: '产品单价', type: 'money'},
        {value: 'transportFee', label: '运费', type: 'money'},
        {value: 'tax', label: '税金', type: 'money'},
        {value: 'totalAmount', label: '总价', type: 'money'},
        {value: 'currencyType', label: '币别'},
        {value: 'remark', label: '备注'},
        {value: 'sku', label: 'sku'},
        {value: 'brand', label: '品牌'},
        {value: 'originCountry', label: '原产国'},
        {value: 'barCode', label: '商品条形码'}
    ]
};

export default function modify(state = initialState, action) {
    if (action.error === true) {
        return state;
    }
    switch (action.type) {
        default:
            return state;
    }
}