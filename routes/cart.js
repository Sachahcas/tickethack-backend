var express = require('express');
const Trip = require('../models/trips');
var router = express.Router();
const moment = require('moment')
const { checkBody } = require('../modules/checkBody');