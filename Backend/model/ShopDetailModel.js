// models/ShopDetailModel.js

import mongoose from 'mongoose';
import ShopOwnerModel from './ShopOwner_Model.js';

const shopDetailSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: ShopOwnerModel,
    required: true
  },
  shopName: {
    type: String,
    required: true,
    maxlength: 255
  },
 
  description: {
    type: String,
    default: null
  },
  locationLat: {
    type: String,
    required: false,
    maxlength: 100
  },
  locationLong: {
    type: String,
    required: false,
    maxlength: 100
  },
  phone: {
    type: String,
    required: true,
    maxlength: 15
  },
  city: {
    type: String,
    required: true,
    maxlength: 100
  },
  address: {
    type: String,
    default: ''
  },
  pic:{
      type: String,
    default: ''
  }
}, {
  timestamps: true
});

const ShopDetailModel = mongoose.model('ShopDetail', shopDetailSchema);

export default ShopDetailModel;