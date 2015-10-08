﻿require = (function e(t, n, r) { function s(o, u) { if (!n[o]) {
    if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a)
            return a(o, !0);
        if (i)
            return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
    }
    var l = n[o] = { exports: {} };
    t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e); }, l, l.exports, e, t, n, r);
} return n[o].exports; } var i = typeof require == "function" && require; for (var o = 0; o < r.length; o++)
    s(r[o]); return s; })({
    1: [function (require, module, exports) {
            module.exports = [
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "name": "name",
                    "outputs": [
                        {
                            "name": "o_name",
                            "type": "bytes32"
                        }
                    ],
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        }
                    ],
                    "name": "owner",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        }
                    ],
                    "name": "content",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bytes32"
                        }
                    ],
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        }
                    ],
                    "name": "addr",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        }
                    ],
                    "name": "reserve",
                    "outputs": [],
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        }
                    ],
                    "name": "subRegistrar",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        },
                        {
                            "name": "_newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "transfer",
                    "outputs": [],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        },
                        {
                            "name": "_registrar",
                            "type": "address"
                        }
                    ],
                    "name": "setSubRegistrar",
                    "outputs": [],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "Registrar",
                    "outputs": [],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        },
                        {
                            "name": "_a",
                            "type": "address"
                        },
                        {
                            "name": "_primary",
                            "type": "bool"
                        }
                    ],
                    "name": "setAddress",
                    "outputs": [],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        },
                        {
                            "name": "_content",
                            "type": "bytes32"
                        }
                    ],
                    "name": "setContent",
                    "outputs": [],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        }
                    ],
                    "name": "disown",
                    "outputs": [],
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "_name",
                            "type": "bytes32"
                        },
                        {
                            "indexed": false,
                            "name": "_winner",
                            "type": "address"
                        }
                    ],
                    "name": "AuctionEnded",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "_name",
                            "type": "bytes32"
                        },
                        {
                            "indexed": false,
                            "name": "_bidder",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "NewBid",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "name",
                            "type": "bytes32"
                        }
                    ],
                    "name": "Changed",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "name",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "name": "addr",
                            "type": "address"
                        }
                    ],
                    "name": "PrimaryChanged",
                    "type": "event"
                }
            ];
        }, {}], 2: [function (require, module, exports) {
            module.exports = [
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        }
                    ],
                    "name": "owner",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        },
                        {
                            "name": "_refund",
                            "type": "address"
                        }
                    ],
                    "name": "disown",
                    "outputs": [],
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        }
                    ],
                    "name": "addr",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        }
                    ],
                    "name": "reserve",
                    "outputs": [],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        },
                        {
                            "name": "_newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "transfer",
                    "outputs": [],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "bytes32"
                        },
                        {
                            "name": "_a",
                            "type": "address"
                        }
                    ],
                    "name": "setAddr",
                    "outputs": [],
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "name",
                            "type": "bytes32"
                        }
                    ],
                    "name": "Changed",
                    "type": "event"
                }
            ];
        }, {}], 3: [function (require, module, exports) {
            module.exports = [
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "from",
                            "type": "bytes32"
                        },
                        {
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "name": "transfer",
                    "outputs": [],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "from",
                            "type": "bytes32"
                        },
                        {
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "name": "indirectId",
                            "type": "bytes32"
                        },
                        {
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "name": "icapTransfer",
                    "outputs": [],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "to",
                            "type": "bytes32"
                        }
                    ],
                    "name": "deposit",
                    "outputs": [],
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "name": "AnonymousDeposit",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "to",
                            "type": "bytes32"
                        },
                        {
                            "indexed": false,
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "name": "Deposit",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "from",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "name": "Transfer",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "from",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "indirectId",
                            "type": "bytes32"
                        },
                        {
                            "indexed": false,
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "name": "IcapTransfer",
                    "type": "event"
                }
            ];
        }, {}], 4: [function (require, module, exports) {
            var f = require('./formatters');
            var SolidityType = require('./type');
            /**
             * SolidityTypeAddress is a prootype that represents address type
             * It matches:
             * address
             * address[]
             * address[4]
             * address[][]
             * address[3][]
             * address[][6][], ...
             */
            var SolidityTypeAddress = function () {
                this._inputFormatter = f.formatInputInt;
                this._outputFormatter = f.formatOutputAddress;
            };
            SolidityTypeAddress.prototype = new SolidityType({});
            SolidityTypeAddress.prototype.constructor = SolidityTypeAddress;
            SolidityTypeAddress.prototype.isType = function (name) {
                return !!name.match(/address(\[([0-9]*)\])?/);
            };
            SolidityTypeAddress.prototype.staticPartLength = function (name) {
                return 32 * this.staticArrayLength(name);
            };
            module.exports = SolidityTypeAddress;
        }, { "./formatters": 9, "./type": 14 }], 5: [function (require, module, exports) {
            var f = require('./formatters');
            var SolidityType = require('./type');
            /**
             * SolidityTypeBool is a prootype that represents bool type
             * It matches:
             * bool
             * bool[]
             * bool[4]
             * bool[][]
             * bool[3][]
             * bool[][6][], ...
             */
            var SolidityTypeBool = function () {
                this._inputFormatter = f.formatInputBool;
                this._outputFormatter = f.formatOutputBool;
            };
            SolidityTypeBool.prototype = new SolidityType({});
            SolidityTypeBool.prototype.constructor = SolidityTypeBool;
            SolidityTypeBool.prototype.isType = function (name) {
                return !!name.match(/^bool(\[([0-9]*)\])*$/);
            };
            SolidityTypeBool.prototype.staticPartLength = function (name) {
                return 32 * this.staticArrayLength(name);
            };
            module.exports = SolidityTypeBool;
        }, { "./formatters": 9, "./type": 14 }], 6: [function (require, module, exports) {
            var f = require('./formatters');
            var SolidityType = require('./type');
            /**
             * SolidityTypeBytes is a prootype that represents bytes type
             * It matches:
             * bytes
             * bytes[]
             * bytes[4]
             * bytes[][]
             * bytes[3][]
             * bytes[][6][], ...
             * bytes32
             * bytes64[]
             * bytes8[4]
             * bytes256[][]
             * bytes[3][]
             * bytes64[][6][], ...
             */
            var SolidityTypeBytes = function () {
                this._inputFormatter = f.formatInputBytes;
                this._outputFormatter = f.formatOutputBytes;
            };
            SolidityTypeBytes.prototype = new SolidityType({});
            SolidityTypeBytes.prototype.constructor = SolidityTypeBytes;
            SolidityTypeBytes.prototype.isType = function (name) {
                return !!name.match(/^bytes([0-9]{1,})(\[([0-9]*)\])*$/);
            };
            SolidityTypeBytes.prototype.staticPartLength = function (name) {
                var matches = name.match(/^bytes([0-9]*)/);
                var size = parseInt(matches[1]);
                return size * this.staticArrayLength(name);
            };
            module.exports = SolidityTypeBytes;
        }, { "./formatters": 9, "./type": 14 }], 7: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file coder.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var f = require('./formatters');
            var SolidityTypeAddress = require('./address');
            var SolidityTypeBool = require('./bool');
            var SolidityTypeInt = require('./int');
            var SolidityTypeUInt = require('./uint');
            var SolidityTypeDynamicBytes = require('./dynamicbytes');
            var SolidityTypeString = require('./string');
            var SolidityTypeReal = require('./real');
            var SolidityTypeUReal = require('./ureal');
            var SolidityTypeBytes = require('./bytes');
            /**
             * SolidityCoder prototype should be used to encode/decode solidity params of any type
             */
            var SolidityCoder = function (types) {
                this._types = types;
            };
            /**
             * This method should be used to transform type to SolidityType
             *
             * @method _requireType
             * @param {String} type
             * @returns {SolidityType}
             * @throws {Error} throws if no matching type is found
             */
            SolidityCoder.prototype._requireType = function (type) {
                var solidityType = this._types.filter(function (t) {
                    return t.isType(type);
                })[0];
                if (!solidityType) {
                    throw Error('invalid solidity type!: ' + type);
                }
                return solidityType;
            };
            /**
             * Should be used to encode plain param
             *
             * @method encodeParam
             * @param {String} type
             * @param {Object} plain param
             * @return {String} encoded plain param
             */
            SolidityCoder.prototype.encodeParam = function (type, param) {
                return this.encodeParams([type], [param]);
            };
            /**
             * Should be used to encode list of params
             *
             * @method encodeParams
             * @param {Array} types
             * @param {Array} params
             * @return {String} encoded list of params
             */
            SolidityCoder.prototype.encodeParams = function (types, params) {
                var solidityTypes = this.getSolidityTypes(types);
                var encodeds = solidityTypes.map(function (solidityType, index) {
                    return solidityType.encode(params[index], types[index]);
                });
                var dynamicOffset = solidityTypes.reduce(function (acc, solidityType, index) {
                    return acc + solidityType.staticPartLength(types[index]);
                }, 0);
                var result = this.encodeMultiWithOffset(types, solidityTypes, encodeds, dynamicOffset);
                return result;
            };
            SolidityCoder.prototype.encodeMultiWithOffset = function (types, solidityTypes, encodeds, dynamicOffset) {
                var result = "";
                var self = this;
                var isDynamic = function (i) {
                    return solidityTypes[i].isDynamicArray(types[i]) || solidityTypes[i].isDynamicType(types[i]);
                };
                types.forEach(function (type, i) {
                    if (isDynamic(i)) {
                        result += f.formatInputInt(dynamicOffset).encode();
                        var e = self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
                        dynamicOffset += e.length / 2;
                    }
                    else {
                        // don't add length to dynamicOffset. it's already counted
                        result += self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
                    }
                    // TODO: figure out nested arrays
                });
                types.forEach(function (type, i) {
                    if (isDynamic(i)) {
                        var e = self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
                        dynamicOffset += e.length / 2;
                        result += e;
                    }
                });
                return result;
            };
            // TODO: refactor whole encoding!
            SolidityCoder.prototype.encodeWithOffset = function (type, solidityType, encoded, offset) {
                var self = this;
                if (solidityType.isDynamicArray(type)) {
                    return (function () {
                        // offset was already set
                        var nestedName = solidityType.nestedName(type);
                        var nestedStaticPartLength = solidityType.staticPartLength(nestedName);
                        var result = encoded[0];
                        (function () {
                            var previousLength = 2; // in int
                            if (solidityType.isDynamicArray(nestedName)) {
                                for (var i = 1; i < encoded.length; i++) {
                                    previousLength += +(encoded[i - 1])[0] || 0;
                                    result += f.formatInputInt(offset + i * nestedStaticPartLength + previousLength * 32).encode();
                                }
                            }
                        })();
                        // first element is length, skip it
                        (function () {
                            for (var i = 0; i < encoded.length - 1; i++) {
                                var additionalOffset = result / 2;
                                result += self.encodeWithOffset(nestedName, solidityType, encoded[i + 1], offset + additionalOffset);
                            }
                        })();
                        return result;
                    })();
                }
                else if (solidityType.isStaticArray(type)) {
                    return (function () {
                        var nestedName = solidityType.nestedName(type);
                        var nestedStaticPartLength = solidityType.staticPartLength(nestedName);
                        var result = "";
                        if (solidityType.isDynamicArray(nestedName)) {
                            (function () {
                                var previousLength = 0; // in int
                                for (var i = 0; i < encoded.length; i++) {
                                    // calculate length of previous item
                                    previousLength += +(encoded[i - 1] || [])[0] || 0;
                                    result += f.formatInputInt(offset + i * nestedStaticPartLength + previousLength * 32).encode();
                                }
                            })();
                        }
                        (function () {
                            for (var i = 0; i < encoded.length; i++) {
                                var additionalOffset = result / 2;
                                result += self.encodeWithOffset(nestedName, solidityType, encoded[i], offset + additionalOffset);
                            }
                        })();
                        return result;
                    })();
                }
                return encoded;
            };
            /**
             * Should be used to decode bytes to plain param
             *
             * @method decodeParam
             * @param {String} type
             * @param {String} bytes
             * @return {Object} plain param
             */
            SolidityCoder.prototype.decodeParam = function (type, bytes) {
                return this.decodeParams([type], bytes)[0];
            };
            /**
             * Should be used to decode list of params
             *
             * @method decodeParam
             * @param {Array} types
             * @param {String} bytes
             * @return {Array} array of plain params
             */
            SolidityCoder.prototype.decodeParams = function (types, bytes) {
                var solidityTypes = this.getSolidityTypes(types);
                var offsets = this.getOffsets(types, solidityTypes);
                return solidityTypes.map(function (solidityType, index) {
                    return solidityType.decode(bytes, offsets[index], types[index], index);
                });
            };
            SolidityCoder.prototype.getOffsets = function (types, solidityTypes) {
                var lengths = solidityTypes.map(function (solidityType, index) {
                    return solidityType.staticPartLength(types[index]);
                    // get length
                });
                for (var i = 0; i < lengths.length; i++) {
                    // sum with length of previous element
                    var previous = (lengths[i - 1] || 0);
                    lengths[i] += previous;
                }
                return lengths.map(function (length, index) {
                    // remove the current length, so the length is sum of previous elements
                    return length - solidityTypes[index].staticPartLength(types[index]);
                });
            };
            SolidityCoder.prototype.getSolidityTypes = function (types) {
                var self = this;
                return types.map(function (type) {
                    return self._requireType(type);
                });
            };
            var coder = new SolidityCoder([
                new SolidityTypeAddress(),
                new SolidityTypeBool(),
                new SolidityTypeInt(),
                new SolidityTypeUInt(),
                new SolidityTypeDynamicBytes(),
                new SolidityTypeBytes(),
                new SolidityTypeString(),
                new SolidityTypeReal(),
                new SolidityTypeUReal()
            ]);
            module.exports = coder;
        }, { "./address": 4, "./bool": 5, "./bytes": 6, "./dynamicbytes": 8, "./formatters": 9, "./int": 10, "./real": 12, "./string": 13, "./uint": 15, "./ureal": 16 }], 8: [function (require, module, exports) {
            var f = require('./formatters');
            var SolidityType = require('./type');
            var SolidityTypeDynamicBytes = function () {
                this._inputFormatter = f.formatInputDynamicBytes;
                this._outputFormatter = f.formatOutputDynamicBytes;
            };
            SolidityTypeDynamicBytes.prototype = new SolidityType({});
            SolidityTypeDynamicBytes.prototype.constructor = SolidityTypeDynamicBytes;
            SolidityTypeDynamicBytes.prototype.isType = function (name) {
                return !!name.match(/^bytes(\[([0-9]*)\])*$/);
            };
            SolidityTypeDynamicBytes.prototype.staticPartLength = function (name) {
                return 32 * this.staticArrayLength(name);
            };
            SolidityTypeDynamicBytes.prototype.isDynamicType = function () {
                return true;
            };
            module.exports = SolidityTypeDynamicBytes;
        }, { "./formatters": 9, "./type": 14 }], 9: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file formatters.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var BigNumber = require('bignumber.js');
            var utils = require('../utils/utils');
            var c = require('../utils/config');
            var SolidityParam = require('./param');
            /**
             * Formats input value to byte representation of int
             * If value is negative, return it's two's complement
             * If the value is floating point, round it down
             *
             * @method formatInputInt
             * @param {String|Number|BigNumber} value that needs to be formatted
             * @returns {SolidityParam}
             */
            var formatInputInt = function (value) {
                BigNumber.config(c.ETH_BIGNUMBER_ROUNDING_MODE);
                var result = utils.padLeft(utils.toTwosComplement(value).round().toString(16), 64);
                return new SolidityParam(result);
            };
            /**
             * Formats input bytes
             *
             * @method formatInputBytes
             * @param {String}
             * @returns {SolidityParam}
             */
            var formatInputBytes = function (value) {
                var result = utils.toHex(value).substr(2);
                var l = Math.floor((result.length + 63) / 64);
                result = utils.padRight(result, l * 64);
                return new SolidityParam(result);
            };
            /**
             * Formats input bytes
             *
             * @method formatDynamicInputBytes
             * @param {String}
             * @returns {SolidityParam}
             */
            var formatInputDynamicBytes = function (value) {
                var result = utils.toHex(value).substr(2);
                var length = result.length / 2;
                var l = Math.floor((result.length + 63) / 64);
                result = utils.padRight(result, l * 64);
                return new SolidityParam(formatInputInt(length).value + result);
            };
            /**
             * Formats input value to byte representation of string
             *
             * @method formatInputString
             * @param {String}
             * @returns {SolidityParam}
             */
            var formatInputString = function (value) {
                var result = utils.fromUtf8(value).substr(2);
                var length = result.length / 2;
                var l = Math.floor((result.length + 63) / 64);
                result = utils.padRight(result, l * 64);
                return new SolidityParam(formatInputInt(length).value + result);
            };
            /**
             * Formats input value to byte representation of bool
             *
             * @method formatInputBool
             * @param {Boolean}
             * @returns {SolidityParam}
             */
            var formatInputBool = function (value) {
                var result = '000000000000000000000000000000000000000000000000000000000000000' + (value ? '1' : '0');
                return new SolidityParam(result);
            };
            /**
             * Formats input value to byte representation of real
             * Values are multiplied by 2^m and encoded as integers
             *
             * @method formatInputReal
             * @param {String|Number|BigNumber}
             * @returns {SolidityParam}
             */
            var formatInputReal = function (value) {
                return formatInputInt(new BigNumber(value).times(new BigNumber(2).pow(128)));
            };
            /**
             * Check if input value is negative
             *
             * @method signedIsNegative
             * @param {String} value is hex format
             * @returns {Boolean} true if it is negative, otherwise false
             */
            var signedIsNegative = function (value) {
                return (new BigNumber(value.substr(0, 1), 16).toString(2).substr(0, 1)) === '1';
            };
            /**
             * Formats right-aligned output bytes to int
             *
             * @method formatOutputInt
             * @param {SolidityParam} param
             * @returns {BigNumber} right-aligned output bytes formatted to big number
             */
            var formatOutputInt = function (param) {
                var value = param.staticPart() || "0";
                // check if it's negative number
                // it it is, return two's complement
                if (signedIsNegative(value)) {
                    return new BigNumber(value, 16).minus(new BigNumber('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16)).minus(1);
                }
                return new BigNumber(value, 16);
            };
            /**
             * Formats right-aligned output bytes to uint
             *
             * @method formatOutputUInt
             * @param {SolidityParam}
             * @returns {BigNumeber} right-aligned output bytes formatted to uint
             */
            var formatOutputUInt = function (param) {
                var value = param.staticPart() || "0";
                return new BigNumber(value, 16);
            };
            /**
             * Formats right-aligned output bytes to real
             *
             * @method formatOutputReal
             * @param {SolidityParam}
             * @returns {BigNumber} input bytes formatted to real
             */
            var formatOutputReal = function (param) {
                return formatOutputInt(param).dividedBy(new BigNumber(2).pow(128));
            };
            /**
             * Formats right-aligned output bytes to ureal
             *
             * @method formatOutputUReal
             * @param {SolidityParam}
             * @returns {BigNumber} input bytes formatted to ureal
             */
            var formatOutputUReal = function (param) {
                return formatOutputUInt(param).dividedBy(new BigNumber(2).pow(128));
            };
            /**
             * Should be used to format output bool
             *
             * @method formatOutputBool
             * @param {SolidityParam}
             * @returns {Boolean} right-aligned input bytes formatted to bool
             */
            var formatOutputBool = function (param) {
                return param.staticPart() === '0000000000000000000000000000000000000000000000000000000000000001' ? true : false;
            };
            /**
             * Should be used to format output bytes
             *
             * @method formatOutputBytes
             * @param {SolidityParam} left-aligned hex representation of string
             * @returns {String} hex string
             */
            var formatOutputBytes = function (param) {
                return '0x' + param.staticPart();
            };
            /**
             * Should be used to format output bytes
             *
             * @method formatOutputDynamicBytes
             * @param {SolidityParam} left-aligned hex representation of string
             * @returns {String} hex string
             */
            var formatOutputDynamicBytes = function (param) {
                var length = (new BigNumber(param.dynamicPart().slice(0, 64), 16)).toNumber() * 2;
                return '0x' + param.dynamicPart().substr(64, length);
            };
            /**
             * Should be used to format output string
             *
             * @method formatOutputString
             * @param {SolidityParam} left-aligned hex representation of string
             * @returns {String} ascii string
             */
            var formatOutputString = function (param) {
                var length = (new BigNumber(param.dynamicPart().slice(0, 64), 16)).toNumber() * 2;
                return utils.toUtf8(param.dynamicPart().substr(64, length));
            };
            /**
             * Should be used to format output address
             *
             * @method formatOutputAddress
             * @param {SolidityParam} right-aligned input bytes
             * @returns {String} address
             */
            var formatOutputAddress = function (param) {
                var value = param.staticPart();
                return "0x" + value.slice(value.length - 40, value.length);
            };
            module.exports = {
                formatInputInt: formatInputInt,
                formatInputBytes: formatInputBytes,
                formatInputDynamicBytes: formatInputDynamicBytes,
                formatInputString: formatInputString,
                formatInputBool: formatInputBool,
                formatInputReal: formatInputReal,
                formatOutputInt: formatOutputInt,
                formatOutputUInt: formatOutputUInt,
                formatOutputReal: formatOutputReal,
                formatOutputUReal: formatOutputUReal,
                formatOutputBool: formatOutputBool,
                formatOutputBytes: formatOutputBytes,
                formatOutputDynamicBytes: formatOutputDynamicBytes,
                formatOutputString: formatOutputString,
                formatOutputAddress: formatOutputAddress
            };
        }, { "../utils/config": 18, "../utils/utils": 20, "./param": 11, "bignumber.js": "bignumber.js" }], 10: [function (require, module, exports) {
            var f = require('./formatters');
            var SolidityType = require('./type');
            /**
             * SolidityTypeInt is a prootype that represents int type
             * It matches:
             * int
             * int[]
             * int[4]
             * int[][]
             * int[3][]
             * int[][6][], ...
             * int32
             * int64[]
             * int8[4]
             * int256[][]
             * int[3][]
             * int64[][6][], ...
             */
            var SolidityTypeInt = function () {
                this._inputFormatter = f.formatInputInt;
                this._outputFormatter = f.formatOutputInt;
            };
            SolidityTypeInt.prototype = new SolidityType({});
            SolidityTypeInt.prototype.constructor = SolidityTypeInt;
            SolidityTypeInt.prototype.isType = function (name) {
                return !!name.match(/^int([0-9]*)?(\[([0-9]*)\])*$/);
            };
            SolidityTypeInt.prototype.staticPartLength = function (name) {
                return 32 * this.staticArrayLength(name);
            };
            module.exports = SolidityTypeInt;
        }, { "./formatters": 9, "./type": 14 }], 11: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file param.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var utils = require('../utils/utils');
            /**
             * SolidityParam object prototype.
             * Should be used when encoding, decoding solidity bytes
             */
            var SolidityParam = function (value, offset) {
                this.value = value || '';
                this.offset = offset; // offset in bytes
            };
            /**
             * This method should be used to get length of params's dynamic part
             *
             * @method dynamicPartLength
             * @returns {Number} length of dynamic part (in bytes)
             */
            SolidityParam.prototype.dynamicPartLength = function () {
                return this.dynamicPart().length / 2;
            };
            /**
             * This method should be used to create copy of solidity param with different offset
             *
             * @method withOffset
             * @param {Number} offset length in bytes
             * @returns {SolidityParam} new solidity param with applied offset
             */
            SolidityParam.prototype.withOffset = function (offset) {
                return new SolidityParam(this.value, offset);
            };
            /**
             * This method should be used to combine solidity params together
             * eg. when appending an array
             *
             * @method combine
             * @param {SolidityParam} param with which we should combine
             * @param {SolidityParam} result of combination
             */
            SolidityParam.prototype.combine = function (param) {
                return new SolidityParam(this.value + param.value);
            };
            /**
             * This method should be called to check if param has dynamic size.
             * If it has, it returns true, otherwise false
             *
             * @method isDynamic
             * @returns {Boolean}
             */
            SolidityParam.prototype.isDynamic = function () {
                return this.offset !== undefined;
            };
            /**
             * This method should be called to transform offset to bytes
             *
             * @method offsetAsBytes
             * @returns {String} bytes representation of offset
             */
            SolidityParam.prototype.offsetAsBytes = function () {
                return !this.isDynamic() ? '' : utils.padLeft(utils.toTwosComplement(this.offset).toString(16), 64);
            };
            /**
             * This method should be called to get static part of param
             *
             * @method staticPart
             * @returns {String} offset if it is a dynamic param, otherwise value
             */
            SolidityParam.prototype.staticPart = function () {
                if (!this.isDynamic()) {
                    return this.value;
                }
                return this.offsetAsBytes();
            };
            /**
             * This method should be called to get dynamic part of param
             *
             * @method dynamicPart
             * @returns {String} returns a value if it is a dynamic param, otherwise empty string
             */
            SolidityParam.prototype.dynamicPart = function () {
                return this.isDynamic() ? this.value : '';
            };
            /**
             * This method should be called to encode param
             *
             * @method encode
             * @returns {String}
             */
            SolidityParam.prototype.encode = function () {
                return this.staticPart() + this.dynamicPart();
            };
            /**
             * This method should be called to encode array of params
             *
             * @method encodeList
             * @param {Array[SolidityParam]} params
             * @returns {String}
             */
            SolidityParam.encodeList = function (params) {
                // updating offsets
                var totalOffset = params.length * 32;
                var offsetParams = params.map(function (param) {
                    if (!param.isDynamic()) {
                        return param;
                    }
                    var offset = totalOffset;
                    totalOffset += param.dynamicPartLength();
                    return param.withOffset(offset);
                });
                // encode everything!
                return offsetParams.reduce(function (result, param) {
                    return result + param.dynamicPart();
                }, offsetParams.reduce(function (result, param) {
                    return result + param.staticPart();
                }, ''));
            };
            module.exports = SolidityParam;
        }, { "../utils/utils": 20 }], 12: [function (require, module, exports) {
            var f = require('./formatters');
            var SolidityType = require('./type');
            /**
             * SolidityTypeReal is a prootype that represents real type
             * It matches:
             * real
             * real[]
             * real[4]
             * real[][]
             * real[3][]
             * real[][6][], ...
             * real32
             * real64[]
             * real8[4]
             * real256[][]
             * real[3][]
             * real64[][6][], ...
             */
            var SolidityTypeReal = function () {
                this._inputFormatter = f.formatInputReal;
                this._outputFormatter = f.formatOutputReal;
            };
            SolidityTypeReal.prototype = new SolidityType({});
            SolidityTypeReal.prototype.constructor = SolidityTypeReal;
            SolidityTypeReal.prototype.isType = function (name) {
                return !!name.match(/real([0-9]*)?(\[([0-9]*)\])?/);
            };
            SolidityTypeReal.prototype.staticPartLength = function (name) {
                return 32 * this.staticArrayLength(name);
            };
            module.exports = SolidityTypeReal;
        }, { "./formatters": 9, "./type": 14 }], 13: [function (require, module, exports) {
            var f = require('./formatters');
            var SolidityType = require('./type');
            var SolidityTypeString = function () {
                this._inputFormatter = f.formatInputString;
                this._outputFormatter = f.formatOutputString;
            };
            SolidityTypeString.prototype = new SolidityType({});
            SolidityTypeString.prototype.constructor = SolidityTypeString;
            SolidityTypeString.prototype.isType = function (name) {
                return !!name.match(/^string(\[([0-9]*)\])*$/);
            };
            SolidityTypeString.prototype.staticPartLength = function (name) {
                return 32 * this.staticArrayLength(name);
            };
            SolidityTypeString.prototype.isDynamicType = function () {
                return true;
            };
            module.exports = SolidityTypeString;
        }, { "./formatters": 9, "./type": 14 }], 14: [function (require, module, exports) {
            var f = require('./formatters');
            var SolidityParam = require('./param');
            /**
             * SolidityType prototype is used to encode/decode solidity params of certain type
             */
            var SolidityType = function (config) {
                this._inputFormatter = config.inputFormatter;
                this._outputFormatter = config.outputFormatter;
            };
            /**
             * Should be used to determine if this SolidityType do match given name
             *
             * @method isType
             * @param {String} name
             * @return {Bool} true if type match this SolidityType, otherwise false
             */
            SolidityType.prototype.isType = function (name) {
                throw "this method should be overrwritten for type " + name;
            };
            /**
             * Should be used to determine what is the length of static part in given type
             *
             * @method staticPartLength
             * @param {String} name
             * @return {Number} length of static part in bytes
             */
            SolidityType.prototype.staticPartLength = function (name) {
                throw "this method should be overrwritten for type: " + name;
            };
            /**
             * Should be used to determine if type is dynamic array
             * eg:
             * "type[]" => true
             * "type[4]" => false
             *
             * @method isDynamicArray
             * @param {String} name
             * @return {Bool} true if the type is dynamic array
             */
            SolidityType.prototype.isDynamicArray = function (name) {
                var nestedTypes = this.nestedTypes(name);
                return !!nestedTypes && !nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g);
            };
            /**
             * Should be used to determine if type is static array
             * eg:
             * "type[]" => false
             * "type[4]" => true
             *
             * @method isStaticArray
             * @param {String} name
             * @return {Bool} true if the type is static array
             */
            SolidityType.prototype.isStaticArray = function (name) {
                var nestedTypes = this.nestedTypes(name);
                return !!nestedTypes && !!nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g);
            };
            /**
             * Should return length of static array
             * eg.
             * "int[32]" => 32
             * "int256[14]" => 14
             * "int[2][3]" => 3
             * "int" => 1
             * "int[1]" => 1
             * "int[]" => 1
             *
             * @method staticArrayLength
             * @param {String} name
             * @return {Number} static array length
             */
            SolidityType.prototype.staticArrayLength = function (name) {
                var nestedTypes = this.nestedTypes(name);
                if (nestedTypes) {
                    return parseInt(nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g) || 1);
                }
                return 1;
            };
            /**
             * Should return nested type
             * eg.
             * "int[32]" => "int"
             * "int256[14]" => "int256"
             * "int[2][3]" => "int[2]"
             * "int" => "int"
             * "int[]" => "int"
             *
             * @method nestedName
             * @param {String} name
             * @return {String} nested name
             */
            SolidityType.prototype.nestedName = function (name) {
                // remove last [] in name
                var nestedTypes = this.nestedTypes(name);
                if (!nestedTypes) {
                    return name;
                }
                return name.substr(0, name.length - nestedTypes[nestedTypes.length - 1].length);
            };
            /**
             * Should return true if type has dynamic size by default
             * such types are "string", "bytes"
             *
             * @method isDynamicType
             * @param {String} name
             * @return {Bool} true if is dynamic, otherwise false
             */
            SolidityType.prototype.isDynamicType = function () {
                return false;
            };
            /**
             * Should return array of nested types
             * eg.
             * "int[2][3][]" => ["[2]", "[3]", "[]"]
             * "int[] => ["[]"]
             * "int" => null
             *
             * @method nestedTypes
             * @param {String} name
             * @return {Array} array of nested types
             */
            SolidityType.prototype.nestedTypes = function (name) {
                // return list of strings eg. "[]", "[3]", "[]", "[2]"
                return name.match(/(\[[0-9]*\])/g);
            };
            /**
             * Should be used to encode the value
             *
             * @method encode
             * @param {Object} value
             * @param {String} name
             * @return {String} encoded value
             */
            SolidityType.prototype.encode = function (value, name) {
                var self = this;
                if (this.isDynamicArray(name)) {
                    return (function () {
                        var length = value.length; // in int
                        var nestedName = self.nestedName(name);
                        var result = [];
                        result.push(f.formatInputInt(length).encode());
                        value.forEach(function (v) {
                            result.push(self.encode(v, nestedName));
                        });
                        return result;
                    })();
                }
                else if (this.isStaticArray(name)) {
                    return (function () {
                        var length = self.staticArrayLength(name); // in int
                        var nestedName = self.nestedName(name);
                        var result = [];
                        for (var i = 0; i < length; i++) {
                            result.push(self.encode(value[i], nestedName));
                        }
                        return result;
                    })();
                }
                return this._inputFormatter(value, name).encode();
            };
            /**
             * Should be used to decode value from bytes
             *
             * @method decode
             * @param {String} bytes
             * @param {Number} offset in bytes
             * @param {String} name type name
             * @returns {Object} decoded value
             */
            SolidityType.prototype.decode = function (bytes, offset, name) {
                var self = this;
                if (this.isDynamicArray(name)) {
                    return (function () {
                        var arrayOffset = parseInt('0x' + bytes.substr(offset * 2, 64)); // in bytes
                        var length = parseInt('0x' + bytes.substr(arrayOffset * 2, 64)); // in int
                        var arrayStart = arrayOffset + 32; // array starts after length; // in bytes
                        var nestedName = self.nestedName(name);
                        var nestedStaticPartLength = self.staticPartLength(nestedName); // in bytes
                        var result = [];
                        for (var i = 0; i < length * nestedStaticPartLength; i += nestedStaticPartLength) {
                            result.push(self.decode(bytes, arrayStart + i, nestedName));
                        }
                        return result;
                    })();
                }
                else if (this.isStaticArray(name)) {
                    return (function () {
                        var length = self.staticArrayLength(name); // in int
                        var arrayStart = offset; // in bytes
                        var nestedName = self.nestedName(name);
                        var nestedStaticPartLength = self.staticPartLength(nestedName); // in bytes
                        var result = [];
                        for (var i = 0; i < length * nestedStaticPartLength; i += nestedStaticPartLength) {
                            result.push(self.decode(bytes, arrayStart + i, nestedName));
                        }
                        return result;
                    })();
                }
                else if (this.isDynamicType(name)) {
                    return (function () {
                        var dynamicOffset = parseInt('0x' + bytes.substr(offset * 2, 64)); // in bytes
                        var length = parseInt('0x' + bytes.substr(dynamicOffset * 2, 64)); // in bytes
                        var roundedLength = Math.floor((length + 31) / 32); // in int
                        return self._outputFormatter(new SolidityParam(bytes.substr(dynamicOffset * 2, (1 + roundedLength) * 64), 0));
                    })();
                }
                var length = this.staticPartLength(name);
                return this._outputFormatter(new SolidityParam(bytes.substr(offset * 2, length * 2)));
            };
            module.exports = SolidityType;
        }, { "./formatters": 9, "./param": 11 }], 15: [function (require, module, exports) {
            var f = require('./formatters');
            var SolidityType = require('./type');
            /**
             * SolidityTypeUInt is a prootype that represents uint type
             * It matches:
             * uint
             * uint[]
             * uint[4]
             * uint[][]
             * uint[3][]
             * uint[][6][], ...
             * uint32
             * uint64[]
             * uint8[4]
             * uint256[][]
             * uint[3][]
             * uint64[][6][], ...
             */
            var SolidityTypeUInt = function () {
                this._inputFormatter = f.formatInputInt;
                this._outputFormatter = f.formatOutputUInt;
            };
            SolidityTypeUInt.prototype = new SolidityType({});
            SolidityTypeUInt.prototype.constructor = SolidityTypeUInt;
            SolidityTypeUInt.prototype.isType = function (name) {
                return !!name.match(/^uint([0-9]*)?(\[([0-9]*)\])*$/);
            };
            SolidityTypeUInt.prototype.staticPartLength = function (name) {
                return 32 * this.staticArrayLength(name);
            };
            module.exports = SolidityTypeUInt;
        }, { "./formatters": 9, "./type": 14 }], 16: [function (require, module, exports) {
            var f = require('./formatters');
            var SolidityType = require('./type');
            /**
             * SolidityTypeUReal is a prootype that represents ureal type
             * It matches:
             * ureal
             * ureal[]
             * ureal[4]
             * ureal[][]
             * ureal[3][]
             * ureal[][6][], ...
             * ureal32
             * ureal64[]
             * ureal8[4]
             * ureal256[][]
             * ureal[3][]
             * ureal64[][6][], ...
             */
            var SolidityTypeUReal = function () {
                this._inputFormatter = f.formatInputReal;
                this._outputFormatter = f.formatOutputUReal;
            };
            SolidityTypeUReal.prototype = new SolidityType({});
            SolidityTypeUReal.prototype.constructor = SolidityTypeUReal;
            SolidityTypeUReal.prototype.isType = function (name) {
                return !!name.match(/^ureal([0-9]*)?(\[([0-9]*)\])*$/);
            };
            SolidityTypeUReal.prototype.staticPartLength = function (name) {
                return 32 * this.staticArrayLength(name);
            };
            module.exports = SolidityTypeUReal;
        }, { "./formatters": 9, "./type": 14 }], 17: [function (require, module, exports) {
            'use strict';
            // go env doesn't have and need XMLHttpRequest
            if (typeof XMLHttpRequest === 'undefined') {
                exports.XMLHttpRequest = {};
            }
            else {
                exports.XMLHttpRequest = XMLHttpRequest; // jshint ignore:line
            }
        }, {}], 18: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /** @file config.js
             * @authors:
             *   Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            /**
             * Utils
             *
             * @module utils
             */
            /**
             * Utility functions
             *
             * @class [utils] config
             * @constructor
             */
            /// required to define ETH_BIGNUMBER_ROUNDING_MODE
            var BigNumber = require('bignumber.js');
            var ETH_UNITS = [
                'wei',
                'kwei',
                'Mwei',
                'Gwei',
                'szabo',
                'finney',
                'femtoether',
                'picoether',
                'nanoether',
                'microether',
                'milliether',
                'nano',
                'micro',
                'milli',
                'ether',
                'grand',
                'Mether',
                'Gether',
                'Tether',
                'Pether',
                'Eether',
                'Zether',
                'Yether',
                'Nether',
                'Dether',
                'Vether',
                'Uether'
            ];
            module.exports = {
                ETH_PADDING: 32,
                ETH_SIGNATURE_LENGTH: 4,
                ETH_UNITS: ETH_UNITS,
                ETH_BIGNUMBER_ROUNDING_MODE: { ROUNDING_MODE: BigNumber.ROUND_DOWN },
                ETH_POLLING_TIMEOUT: 1000 / 2,
                defaultBlock: 'latest',
                defaultAccount: undefined
            };
        }, { "bignumber.js": "bignumber.js" }], 19: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file sha3.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var utils = require('./utils');
            var sha3 = require('crypto-js/sha3');
            module.exports = function (str, isNew) {
                if (str.substr(0, 2) === '0x' && !isNew) {
                    console.warn('requirement of using web3.fromAscii before sha3 is deprecated');
                    console.warn('new usage: \'web3.sha3("hello")\'');
                    console.warn('see https://github.com/ethereum/web3.js/pull/205');
                    console.warn('if you need to hash hex value, you can do \'sha3("0xfff", true)\'');
                    str = utils.toUtf8(str);
                }
                return sha3(str, {
                    outputLength: 256
                }).toString();
            };
        }, { "./utils": 20, "crypto-js/sha3": 48 }], 20: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file utils.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            /**
             * Utils
             *
             * @module utils
             */
            /**
             * Utility functions
             *
             * @class [utils] utils
             * @constructor
             */
            var BigNumber = require('bignumber.js');
            var utf8 = require('utf8');
            var unitMap = {
                'wei': '1',
                'kwei': '1000',
                'ada': '1000',
                'femtoether': '1000',
                'mwei': '1000000',
                'babbage': '1000000',
                'picoether': '1000000',
                'gwei': '1000000000',
                'shannon': '1000000000',
                'nanoether': '1000000000',
                'nano': '1000000000',
                'szabo': '1000000000000',
                'microether': '1000000000000',
                'micro': '1000000000000',
                'finney': '1000000000000000',
                'milliether': '1000000000000000',
                'milli': '1000000000000000',
                'ether': '1000000000000000000',
                'kether': '1000000000000000000000',
                'grand': '1000000000000000000000',
                'einstein': '1000000000000000000000',
                'mether': '1000000000000000000000000',
                'gether': '1000000000000000000000000000',
                'tether': '1000000000000000000000000000000'
            };
            /**
             * Should be called to pad string to expected length
             *
             * @method padLeft
             * @param {String} string to be padded
             * @param {Number} characters that result string should have
             * @param {String} sign, by default 0
             * @returns {String} right aligned string
             */
            var padLeft = function (string, chars, sign) {
                return new Array(chars - string.length + 1).join(sign ? sign : "0") + string;
            };
            /**
             * Should be called to pad string to expected length
             *
             * @method padRight
             * @param {String} string to be padded
             * @param {Number} characters that result string should have
             * @param {String} sign, by default 0
             * @returns {String} right aligned string
             */
            var padRight = function (string, chars, sign) {
                return string + (new Array(chars - string.length + 1).join(sign ? sign : "0"));
            };
            /**
             * Should be called to get utf8 from it's hex representation
             *
             * @method toUtf8
             * @param {String} string in hex
             * @returns {String} ascii string representation of hex value
             */
            var toUtf8 = function (hex) {
                // Find termination
                var str = "";
                var i = 0, l = hex.length;
                if (hex.substring(0, 2) === '0x') {
                    i = 2;
                }
                for (; i < l; i += 2) {
                    var code = parseInt(hex.substr(i, 2), 16);
                    str += String.fromCharCode(code);
                }
                return utf8.decode(str);
            };
            /**
             * Should be called to get ascii from it's hex representation
             *
             * @method toAscii
             * @param {String} string in hex
             * @returns {String} ascii string representation of hex value
             */
            var toAscii = function (hex) {
                // Find termination
                var str = "";
                var i = 0, l = hex.length;
                if (hex.substring(0, 2) === '0x') {
                    i = 2;
                }
                for (; i < l; i += 2) {
                    var code = parseInt(hex.substr(i, 2), 16);
                    str += String.fromCharCode(code);
                }
                return str;
            };
            /**
             * Shold be called to get hex representation (prefixed by 0x) of utf8 string
             *
             * @method fromUtf8
             * @param {String} string
             * @param {Number} optional padding
             * @returns {String} hex representation of input string
             */
            var fromUtf8 = function (str) {
                str = utf8.encode(str);
                var hex = "";
                for (var i = 0; i < str.length; i++) {
                    var n = str.charCodeAt(i).toString(16);
                    hex += n.length < 2 ? '0' + n : n;
                }
                return "0x" + hex;
            };
            /**
             * Shold be called to get hex representation (prefixed by 0x) of ascii string
             *
             * @method fromAscii
             * @param {String} string
             * @param {Number} optional padding
             * @returns {String} hex representation of input string
             */
            var fromAscii = function (str) {
                var hex = "";
                for (var i = 0; i < str.length; i++) {
                    var code = str.charCodeAt(i);
                    var n = code.toString(16);
                    hex += n.length < 2 ? '0' + n : n;
                }
                return "0x" + hex;
            };
            /**
             * Should be used to create full function/event name from json abi
             *
             * @method transformToFullName
             * @param {Object} json-abi
             * @return {String} full fnction/event name
             */
            var transformToFullName = function (json) {
                if (json.name.indexOf('(') !== -1) {
                    return json.name;
                }
                var typeName = json.inputs.map(function (i) { return i.type; }).join();
                return json.name + '(' + typeName + ')';
            };
            /**
             * Should be called to get display name of contract function
             *
             * @method extractDisplayName
             * @param {String} name of function/event
             * @returns {String} display name for function/event eg. multiply(uint256) -> multiply
             */
            var extractDisplayName = function (name) {
                var length = name.indexOf('(');
                return length !== -1 ? name.substr(0, length) : name;
            };
            /// @returns overloaded part of function/event name
            var extractTypeName = function (name) {
                /// TODO: make it invulnerable
                var length = name.indexOf('(');
                return length !== -1 ? name.substr(length + 1, name.length - 1 - (length + 1)).replace(' ', '') : "";
            };
            /**
             * Converts value to it's decimal representation in string
             *
             * @method toDecimal
             * @param {String|Number|BigNumber}
             * @return {String}
             */
            var toDecimal = function (value) {
                return toBigNumber(value).toNumber();
            };
            /**
             * Converts value to it's hex representation
             *
             * @method fromDecimal
             * @param {String|Number|BigNumber}
             * @return {String}
             */
            var fromDecimal = function (value) {
                var number = toBigNumber(value);
                var result = number.toString(16);
                return number.lessThan(0) ? '-0x' + result.substr(1) : '0x' + result;
            };
            /**
             * Auto converts any given value into it's hex representation.
             *
             * And even stringifys objects before.
             *
             * @method toHex
             * @param {String|Number|BigNumber|Object}
             * @return {String}
             */
            var toHex = function (val) {
                /*jshint maxcomplexity: 8 */
                if (isBoolean(val))
                    return fromDecimal(+val);
                if (isBigNumber(val))
                    return fromDecimal(val);
                if (isObject(val))
                    return fromUtf8(JSON.stringify(val));
                // if its a negative number, pass it through fromDecimal
                if (isString(val)) {
                    if (val.indexOf('-0x') === 0)
                        return fromDecimal(val);
                    else if (val.indexOf('0x') === 0)
                        return val;
                    else if (!isFinite(val))
                        return fromAscii(val);
                }
                return fromDecimal(val);
            };
            /**
             * Returns value of unit in Wei
             *
             * @method getValueOfUnit
             * @param {String} unit the unit to convert to, default ether
             * @returns {BigNumber} value of the unit (in Wei)
             * @throws error if the unit is not correct:w
             */
            var getValueOfUnit = function (unit) {
                unit = unit ? unit.toLowerCase() : 'ether';
                var unitValue = unitMap[unit];
                if (unitValue === undefined) {
                    throw new Error('This unit doesn\'t exists, please use the one of the following units' + JSON.stringify(unitMap, null, 2));
                }
                return new BigNumber(unitValue, 10);
            };
            /**
             * Takes a number of wei and converts it to any other ether unit.
             *
             * Possible units are:
             *   SI Short   SI Full        Effigy       Other
             * - kwei       femtoether     ada
             * - mwei       picoether      babbage
             * - gwei       nanoether      shannon      nano
             * - --         microether     szabo        micro
             * - --         milliether     finney       milli
             * - ether      --             --
             * - kether                    einstein     grand
             * - mether
             * - gether
             * - tether
             *
             * @method fromWei
             * @param {Number|String} number can be a number, number string or a HEX of a decimal
             * @param {String} unit the unit to convert to, default ether
             * @return {String|Object} When given a BigNumber object it returns one as well, otherwise a number
            */
            var fromWei = function (number, unit) {
                var returnValue = toBigNumber(number).dividedBy(getValueOfUnit(unit));
                return isBigNumber(number) ? returnValue : returnValue.toString(10);
            };
            /**
             * Takes a number of a unit and converts it to wei.
             *
             * Possible units are:
             *   SI Short   SI Full        Effigy       Other
             * - kwei       femtoether     ada
             * - mwei       picoether      babbage
             * - gwei       nanoether      shannon      nano
             * - --         microether     szabo        micro
             * - --         milliether     finney       milli
             * - ether      --             --
             * - kether                    einstein     grand
             * - mether
             * - gether
             * - tether
             *
             * @method toWei
             * @param {Number|String|BigNumber} number can be a number, number string or a HEX of a decimal
             * @param {String} unit the unit to convert from, default ether
             * @return {String|Object} When given a BigNumber object it returns one as well, otherwise a number
            */
            var toWei = function (number, unit) {
                var returnValue = toBigNumber(number).times(getValueOfUnit(unit));
                return isBigNumber(number) ? returnValue : returnValue.toString(10);
            };
            /**
             * Takes an input and transforms it into an bignumber
             *
             * @method toBigNumber
             * @param {Number|String|BigNumber} a number, string, HEX string or BigNumber
             * @return {BigNumber} BigNumber
            */
            var toBigNumber = function (number) {
                /*jshint maxcomplexity:5 */
                number = number || 0;
                if (isBigNumber(number))
                    return number;
                if (isString(number) && (number.indexOf('0x') === 0 || number.indexOf('-0x') === 0)) {
                    return new BigNumber(number.replace('0x', ''), 16);
                }
                return new BigNumber(number.toString(10), 10);
            };
            /**
             * Takes and input transforms it into bignumber and if it is negative value, into two's complement
             *
             * @method toTwosComplement
             * @param {Number|String|BigNumber}
             * @return {BigNumber}
             */
            var toTwosComplement = function (number) {
                var bigNumber = toBigNumber(number);
                if (bigNumber.lessThan(0)) {
                    return new BigNumber("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16).plus(bigNumber).plus(1);
                }
                return bigNumber;
            };
            /**
             * Checks if the given string is strictly an address
             *
             * @method isStrictAddress
             * @param {String} address the given HEX adress
             * @return {Boolean}
            */
            var isStrictAddress = function (address) {
                return /^0x[0-9a-f]{40}$/i.test(address);
            };
            /**
             * Checks if the given string is an address
             *
             * @method isAddress
             * @param {String} address the given HEX adress
             * @return {Boolean}
            */
            var isAddress = function (address) {
                return /^(0x)?[0-9a-f]{40}$/i.test(address);
            };
            /**
             * Transforms given string to valid 20 bytes-length addres with 0x prefix
             *
             * @method toAddress
             * @param {String} address
             * @return {String} formatted address
             */
            var toAddress = function (address) {
                if (isStrictAddress(address)) {
                    return address;
                }
                if (/^[0-9a-f]{40}$/.test(address)) {
                    return '0x' + address;
                }
                return '0x' + padLeft(toHex(address).substr(2), 40);
            };
            /**
             * Returns true if object is BigNumber, otherwise false
             *
             * @method isBigNumber
             * @param {Object}
             * @return {Boolean}
             */
            var isBigNumber = function (object) {
                return object instanceof BigNumber ||
                    (object && object.constructor && object.constructor.name === 'BigNumber');
            };
            /**
             * Returns true if object is string, otherwise false
             *
             * @method isString
             * @param {Object}
             * @return {Boolean}
             */
            var isString = function (object) {
                return typeof object === 'string' ||
                    (object && object.constructor && object.constructor.name === 'String');
            };
            /**
             * Returns true if object is function, otherwise false
             *
             * @method isFunction
             * @param {Object}
             * @return {Boolean}
             */
            var isFunction = function (object) {
                return typeof object === 'function';
            };
            /**
             * Returns true if object is Objet, otherwise false
             *
             * @method isObject
             * @param {Object}
             * @return {Boolean}
             */
            var isObject = function (object) {
                return typeof object === 'object';
            };
            /**
             * Returns true if object is boolean, otherwise false
             *
             * @method isBoolean
             * @param {Object}
             * @return {Boolean}
             */
            var isBoolean = function (object) {
                return typeof object === 'boolean';
            };
            /**
             * Returns true if object is array, otherwise false
             *
             * @method isArray
             * @param {Object}
             * @return {Boolean}
             */
            var isArray = function (object) {
                return object instanceof Array;
            };
            /**
             * Returns true if given string is valid json object
             *
             * @method isJson
             * @param {String}
             * @return {Boolean}
             */
            var isJson = function (str) {
                try {
                    return !!JSON.parse(str);
                }
                catch (e) {
                    return false;
                }
            };
            module.exports = {
                padLeft: padLeft,
                padRight: padRight,
                toHex: toHex,
                toDecimal: toDecimal,
                fromDecimal: fromDecimal,
                toUtf8: toUtf8,
                toAscii: toAscii,
                fromUtf8: fromUtf8,
                fromAscii: fromAscii,
                transformToFullName: transformToFullName,
                extractDisplayName: extractDisplayName,
                extractTypeName: extractTypeName,
                toWei: toWei,
                fromWei: fromWei,
                toBigNumber: toBigNumber,
                toTwosComplement: toTwosComplement,
                toAddress: toAddress,
                isBigNumber: isBigNumber,
                isStrictAddress: isStrictAddress,
                isAddress: isAddress,
                isFunction: isFunction,
                isString: isString,
                isObject: isObject,
                isBoolean: isBoolean,
                isArray: isArray,
                isJson: isJson
            };
        }, { "bignumber.js": "bignumber.js", "utf8": 50 }], 21: [function (require, module, exports) {
            module.exports = {
                "version": "0.13.0"
            };
        }, {}], 22: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /** @file web3.js
             * @authors:
             *   Jeffrey Wilcke <jeff@ethdev.com>
             *   Marek Kotewicz <marek@ethdev.com>
             *   Marian Oancea <marian@ethdev.com>
             *   Fabian Vogelsteller <fabian@ethdev.com>
             *   Gav Wood <g@ethdev.com>
             * @date 2014
             */
            var version = require('./version.json');
            var net = require('./web3/methods/net');
            var eth = require('./web3/methods/eth');
            var db = require('./web3/methods/db');
            var shh = require('./web3/methods/shh');
            var watches = require('./web3/methods/watches');
            var Filter = require('./web3/filter');
            var IsSyncing = require('./web3/syncing');
            var utils = require('./utils/utils');
            var formatters = require('./web3/formatters');
            var RequestManager = require('./web3/requestmanager');
            var c = require('./utils/config');
            var Property = require('./web3/property');
            var Batch = require('./web3/batch');
            var sha3 = require('./utils/sha3');
            var web3Properties = [
                new Property({
                    name: 'version.client',
                    getter: 'web3_clientVersion'
                }),
                new Property({
                    name: 'version.network',
                    getter: 'net_version',
                    inputFormatter: utils.toDecimal
                }),
                new Property({
                    name: 'version.ethereum',
                    getter: 'eth_protocolVersion',
                    inputFormatter: utils.toDecimal
                }),
                new Property({
                    name: 'version.whisper',
                    getter: 'shh_version',
                    inputFormatter: utils.toDecimal
                })
            ];
            /// creates methods in a given object based on method description on input
            /// setups api calls for these methods
            var setupMethods = function (obj, methods) {
                methods.forEach(function (method) {
                    method.attachToObject(obj);
                });
            };
            /// creates properties in a given object based on properties description on input
            /// setups api calls for these properties
            var setupProperties = function (obj, properties) {
                properties.forEach(function (property) {
                    property.attachToObject(obj);
                });
            };
            /// setups web3 object, and it's in-browser executed methods
            var web3 = {};
            web3.providers = {};
            web3.currentProvider = null;
            web3.version = {};
            web3.version.api = version.version;
            web3.eth = {};
            web3.eth.isSyncing = function (callback) {
                return new IsSyncing(callback);
            };
            /*jshint maxparams:4 */
            web3.eth.filter = function (fil, callback) {
                return new Filter(fil, watches.eth(), formatters.outputLogFormatter, callback);
            };
            /*jshint maxparams:3 */
            web3.shh = {};
            web3.shh.filter = function (fil, callback) {
                return new Filter(fil, watches.shh(), formatters.outputPostFormatter, callback);
            };
            web3.net = {};
            web3.db = {};
            web3.setProvider = function (provider) {
                this.currentProvider = provider;
                RequestManager.getInstance().setProvider(provider);
            };
            web3.isConnected = function () {
                return (this.currentProvider && this.currentProvider.isConnected());
            };
            web3.reset = function (keepIsSyncing) {
                RequestManager.getInstance().reset(keepIsSyncing);
                c.defaultBlock = 'latest';
                c.defaultAccount = undefined;
            };
            web3.toHex = utils.toHex;
            web3.toAscii = utils.toAscii;
            web3.toUtf8 = utils.toUtf8;
            web3.fromAscii = utils.fromAscii;
            web3.fromUtf8 = utils.fromUtf8;
            web3.toDecimal = utils.toDecimal;
            web3.fromDecimal = utils.fromDecimal;
            web3.toBigNumber = utils.toBigNumber;
            web3.toWei = utils.toWei;
            web3.fromWei = utils.fromWei;
            web3.isAddress = utils.isAddress;
            web3.isIBAN = utils.isIBAN;
            web3.sha3 = sha3;
            web3.createBatch = function () {
                return new Batch();
            };
            // ADD defaultblock
            Object.defineProperty(web3.eth, 'defaultBlock', {
                get: function () {
                    return c.defaultBlock;
                },
                set: function (val) {
                    c.defaultBlock = val;
                    return val;
                }
            });
            Object.defineProperty(web3.eth, 'defaultAccount', {
                get: function () {
                    return c.defaultAccount;
                },
                set: function (val) {
                    c.defaultAccount = val;
                    return val;
                }
            });
            // EXTEND
            web3._extend = function (extension) {
                /*jshint maxcomplexity: 6 */
                if (extension.property && !web3[extension.property])
                    web3[extension.property] = {};
                setupMethods(web3[extension.property] || web3, extension.methods || []);
                setupProperties(web3[extension.property] || web3, extension.properties || []);
            };
            web3._extend.formatters = formatters;
            web3._extend.utils = utils;
            web3._extend.Method = require('./web3/method');
            web3._extend.Property = require('./web3/property');
            /// setups all api methods
            setupProperties(web3, web3Properties);
            setupMethods(web3.net, net.methods);
            setupProperties(web3.net, net.properties);
            setupMethods(web3.eth, eth.methods);
            setupProperties(web3.eth, eth.properties);
            setupMethods(web3.db, db.methods);
            setupMethods(web3.shh, shh.methods);
            module.exports = web3;
        }, { "./utils/config": 18, "./utils/sha3": 19, "./utils/utils": 20, "./version.json": 21, "./web3/batch": 24, "./web3/filter": 28, "./web3/formatters": 29, "./web3/method": 35, "./web3/methods/db": 36, "./web3/methods/eth": 37, "./web3/methods/net": 38, "./web3/methods/shh": 39, "./web3/methods/watches": 40, "./web3/property": 42, "./web3/requestmanager": 43, "./web3/syncing": 44 }], 23: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file allevents.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2014
             */
            var sha3 = require('../utils/sha3');
            var SolidityEvent = require('./event');
            var formatters = require('./formatters');
            var utils = require('../utils/utils');
            var Filter = require('./filter');
            var watches = require('./methods/watches');
            var AllSolidityEvents = function (json, address) {
                this._json = json;
                this._address = address;
            };
            AllSolidityEvents.prototype.encode = function (options) {
                options = options || {};
                var result = {};
                ['fromBlock', 'toBlock'].filter(function (f) {
                    return options[f] !== undefined;
                }).forEach(function (f) {
                    result[f] = formatters.inputBlockNumberFormatter(options[f]);
                });
                result.address = this._address;
                return result;
            };
            AllSolidityEvents.prototype.decode = function (data) {
                data.data = data.data || '';
                data.topics = data.topics || [];
                var eventTopic = data.topics[0].slice(2);
                var match = this._json.filter(function (j) {
                    return eventTopic === sha3(utils.transformToFullName(j));
                })[0];
                if (!match) {
                    console.warn('cannot find event for log');
                    return data;
                }
                var event = new SolidityEvent(match, this._address);
                return event.decode(data);
            };
            AllSolidityEvents.prototype.execute = function (options, callback) {
                if (utils.isFunction(arguments[arguments.length - 1])) {
                    callback = arguments[arguments.length - 1];
                    if (arguments.length === 1)
                        options = null;
                }
                var o = this.encode(options);
                var formatter = this.decode.bind(this);
                return new Filter(o, watches.eth(), formatter, callback);
            };
            AllSolidityEvents.prototype.attachToContract = function (contract) {
                var execute = this.execute.bind(this);
                contract.allEvents = execute;
            };
            module.exports = AllSolidityEvents;
        }, { "../utils/sha3": 19, "../utils/utils": 20, "./event": 27, "./filter": 28, "./formatters": 29, "./methods/watches": 40 }], 24: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file batch.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var RequestManager = require('./requestmanager');
            var Jsonrpc = require('./jsonrpc');
            var errors = require('./errors');
            var Batch = function () {
                this.requests = [];
            };
            /**
             * Should be called to add create new request to batch request
             *
             * @method add
             * @param {Object} jsonrpc requet object
             */
            Batch.prototype.add = function (request) {
                this.requests.push(request);
            };
            /**
             * Should be called to execute batch request
             *
             * @method execute
             */
            Batch.prototype.execute = function () {
                var requests = this.requests;
                RequestManager.getInstance().sendBatch(requests, function (err, results) {
                    results = results || [];
                    requests.map(function (request, index) {
                        return results[index] || {};
                    }).forEach(function (result, index) {
                        if (requests[index].callback) {
                            if (!Jsonrpc.getInstance().isValidResponse(result)) {
                                return requests[index].callback(errors.InvalidResponse(result));
                            }
                            requests[index].callback(null, (requests[index].format ? requests[index].format(result.result) : result.result));
                        }
                    });
                });
            };
            module.exports = Batch;
        }, { "./errors": 26, "./jsonrpc": 34, "./requestmanager": 43 }], 25: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file contract.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2014
             */
            var web3 = require('../web3');
            var utils = require('../utils/utils');
            var coder = require('../solidity/coder');
            var SolidityEvent = require('./event');
            var SolidityFunction = require('./function');
            var AllEvents = require('./allevents');
            /**
             * Should be called to encode constructor params
             *
             * @method encodeConstructorParams
             * @param {Array} abi
             * @param {Array} constructor params
             */
            var encodeConstructorParams = function (abi, params) {
                return abi.filter(function (json) {
                    return json.type === 'constructor' && json.inputs.length === params.length;
                }).map(function (json) {
                    return json.inputs.map(function (input) {
                        return input.type;
                    });
                }).map(function (types) {
                    return coder.encodeParams(types, params);
                })[0] || '';
            };
            /**
             * Should be called to add functions to contract object
             *
             * @method addFunctionsToContract
             * @param {Contract} contract
             * @param {Array} abi
             */
            var addFunctionsToContract = function (contract, abi) {
                abi.filter(function (json) {
                    return json.type === 'function';
                }).map(function (json) {
                    return new SolidityFunction(json, contract.address);
                }).forEach(function (f) {
                    f.attachToContract(contract);
                });
            };
            /**
             * Should be called to add events to contract object
             *
             * @method addEventsToContract
             * @param {Contract} contract
             * @param {Array} abi
             */
            var addEventsToContract = function (contract, abi) {
                var events = abi.filter(function (json) {
                    return json.type === 'event';
                });
                var All = new AllEvents(events, contract.address);
                All.attachToContract(contract);
                events.map(function (json) {
                    return new SolidityEvent(json, contract.address);
                }).forEach(function (e) {
                    e.attachToContract(contract);
                });
            };
            /**
             * Should be called to create new ContractFactory
             *
             * @method contract
             * @param {Array} abi
             * @returns {ContractFactory} new contract factory
             */
            var contract = function (abi) {
                return new ContractFactory(abi);
            };
            /**
             * Should be called to check if the contract gets properly deployed on the blockchain.
             *
             * @method checkForContractAddress
             * @param {Object} contract
             * @param {Function} callback
             * @returns {Undefined}
             */
            var checkForContractAddress = function (contract, abi, callback) {
                var count = 0, callbackFired = false;
                // wait for receipt
                var filter = web3.eth.filter('latest', function (e) {
                    if (!e && !callbackFired) {
                        count++;
                        // console.log('Checking for contract address', count);
                        // stop watching after 50 blocks (timeout)
                        if (count > 50) {
                            filter.stopWatching();
                            callbackFired = true;
                            if (callback)
                                callback(new Error('Contract transaction couldn\'t be found after 50 blocks'));
                            else
                                throw new Error('Contract transaction couldn\'t be found after 50 blocks');
                        }
                        else {
                            web3.eth.getTransactionReceipt(contract.transactionHash, function (e, receipt) {
                                if (receipt && !callbackFired) {
                                    web3.eth.getCode(receipt.contractAddress, function (e, code) {
                                        /*jshint maxcomplexity: 5 */
                                        if (callbackFired)
                                            return;
                                        filter.stopWatching();
                                        callbackFired = true;
                                        if (code.length > 2) {
                                            // console.log('Contract code deployed!');
                                            contract.address = receipt.contractAddress;
                                            // attach events and methods
                                            addFunctionsToContract(contract, abi);
                                            addEventsToContract(contract, abi);
                                            // call callback for the second time
                                            if (callback)
                                                callback(null, contract);
                                        }
                                        else {
                                            if (callback)
                                                callback(new Error('The contract code couldn\'t be stored, please check your gas amount.'));
                                            else
                                                throw new Error('The contract code couldn\'t be stored, please check your gas amount.');
                                        }
                                    });
                                }
                            });
                        }
                    }
                });
            };
            /**
             * Should be called to create new ContractFactory instance
             *
             * @method ContractFactory
             * @param {Array} abi
             */
            var ContractFactory = function (abi) {
                this.abi = abi;
            };
            /**
             * Should be called to create new contract on a blockchain
             *
             * @method new
             * @param {Any} contract constructor param1 (optional)
             * @param {Any} contract constructor param2 (optional)
             * @param {Object} contract transaction object (required)
             * @param {Function} callback
             * @returns {Contract} returns contract instance
             */
            ContractFactory.prototype.new = function () {
                var _this = this;
                var contract = new Contract(this.abi);
                // parse arguments
                var options = {}; // required!
                var callback;
                var args = Array.prototype.slice.call(arguments);
                if (utils.isFunction(args[args.length - 1])) {
                    callback = args.pop();
                }
                var last = args[args.length - 1];
                if (utils.isObject(last) && !utils.isArray(last)) {
                    options = args.pop();
                }
                // throw an error if there are no options
                var bytes = encodeConstructorParams(this.abi, args);
                options.data += bytes;
                if (callback) {
                    // wait for the contract address adn check if the code was deployed
                    web3.eth.sendTransaction(options, function (err, hash) {
                        if (err) {
                            callback(err);
                        }
                        else {
                            // add the transaction hash
                            contract.transactionHash = hash;
                            // call callback for the first time
                            callback(null, contract);
                            checkForContractAddress(contract, _this.abi, callback);
                        }
                    });
                }
                else {
                    var hash = web3.eth.sendTransaction(options);
                    // add the transaction hash
                    contract.transactionHash = hash;
                    checkForContractAddress(contract, _this.abi);
                }
                return contract;
            };
            /**
             * Should be called to get access to existing contract on a blockchain
             *
             * @method at
             * @param {Address} contract address (required)
             * @param {Function} callback {optional)
             * @returns {Contract} returns contract if no callback was passed,
             * otherwise calls callback function (err, contract)
             */
            ContractFactory.prototype.at = function (address, callback) {
                var contract = new Contract(this.abi, address);
                // TODO: address is required
                // attach functions
                addFunctionsToContract(contract, this.abi);
                addEventsToContract(contract, this.abi);
                if (callback) {
                    callback(null, contract);
                }
                return contract;
            };
            /**
             * Should be called to create new contract instance
             *
             * @method Contract
             * @param {Array} abi
             * @param {Address} contract address
             */
            var Contract = function (abi, address) {
                this.address = address;
            };
            module.exports = contract;
        }, { "../solidity/coder": 7, "../utils/utils": 20, "../web3": 22, "./allevents": 23, "./event": 27, "./function": 30 }], 26: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file errors.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            module.exports = {
                InvalidNumberOfParams: function () {
                    return new Error('Invalid number of input parameters');
                },
                InvalidConnection: function (host) {
                    return new Error('CONNECTION ERROR: Couldn\'t connect to node ' + host + ', is it running?');
                },
                InvalidProvider: function () {
                    return new Error('Providor not set or invalid');
                },
                InvalidResponse: function (result) {
                    var message = !!result && !!result.error && !!result.error.message ? result.error.message : 'Invalid JSON RPC response: ' + result;
                    return new Error(message);
                }
            };
        }, {}], 27: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file event.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2014
             */
            var utils = require('../utils/utils');
            var coder = require('../solidity/coder');
            var formatters = require('./formatters');
            var sha3 = require('../utils/sha3');
            var Filter = require('./filter');
            var watches = require('./methods/watches');
            /**
             * This prototype should be used to create event filters
             */
            var SolidityEvent = function (json, address) {
                this._params = json.inputs;
                this._name = utils.transformToFullName(json);
                this._address = address;
                this._anonymous = json.anonymous;
            };
            /**
             * Should be used to get filtered param types
             *
             * @method types
             * @param {Bool} decide if returned typed should be indexed
             * @return {Array} array of types
             */
            SolidityEvent.prototype.types = function (indexed) {
                return this._params.filter(function (i) {
                    return i.indexed === indexed;
                }).map(function (i) {
                    return i.type;
                });
            };
            /**
             * Should be used to get event display name
             *
             * @method displayName
             * @return {String} event display name
             */
            SolidityEvent.prototype.displayName = function () {
                return utils.extractDisplayName(this._name);
            };
            /**
             * Should be used to get event type name
             *
             * @method typeName
             * @return {String} event type name
             */
            SolidityEvent.prototype.typeName = function () {
                return utils.extractTypeName(this._name);
            };
            /**
             * Should be used to get event signature
             *
             * @method signature
             * @return {String} event signature
             */
            SolidityEvent.prototype.signature = function () {
                return sha3(this._name);
            };
            /**
             * Should be used to encode indexed params and options to one final object
             *
             * @method encode
             * @param {Object} indexed
             * @param {Object} options
             * @return {Object} everything combined together and encoded
             */
            SolidityEvent.prototype.encode = function (indexed, options) {
                indexed = indexed || {};
                options = options || {};
                var result = {};
                ['fromBlock', 'toBlock'].filter(function (f) {
                    return options[f] !== undefined;
                }).forEach(function (f) {
                    result[f] = formatters.inputBlockNumberFormatter(options[f]);
                });
                result.topics = [];
                result.address = this._address;
                if (!this._anonymous) {
                    result.topics.push('0x' + this.signature());
                }
                var indexedTopics = this._params.filter(function (i) {
                    return i.indexed === true;
                }).map(function (i) {
                    var value = indexed[i.name];
                    if (value === undefined || value === null) {
                        return null;
                    }
                    if (utils.isArray(value)) {
                        return value.map(function (v) {
                            return '0x' + coder.encodeParam(i.type, v);
                        });
                    }
                    return '0x' + coder.encodeParam(i.type, value);
                });
                result.topics = result.topics.concat(indexedTopics);
                return result;
            };
            /**
             * Should be used to decode indexed params and options
             *
             * @method decode
             * @param {Object} data
             * @return {Object} result object with decoded indexed && not indexed params
             */
            SolidityEvent.prototype.decode = function (data) {
                data.data = data.data || '';
                data.topics = data.topics || [];
                var argTopics = this._anonymous ? data.topics : data.topics.slice(1);
                var indexedData = argTopics.map(function (topics) { return topics.slice(2); }).join("");
                var indexedParams = coder.decodeParams(this.types(true), indexedData);
                var notIndexedData = data.data.slice(2);
                var notIndexedParams = coder.decodeParams(this.types(false), notIndexedData);
                var result = formatters.outputLogFormatter(data);
                result.event = this.displayName();
                result.address = data.address;
                result.args = this._params.reduce(function (acc, current) {
                    acc[current.name] = current.indexed ? indexedParams.shift() : notIndexedParams.shift();
                    return acc;
                }, {});
                delete result.data;
                delete result.topics;
                return result;
            };
            /**
             * Should be used to create new filter object from event
             *
             * @method execute
             * @param {Object} indexed
             * @param {Object} options
             * @return {Object} filter object
             */
            SolidityEvent.prototype.execute = function (indexed, options, callback) {
                if (utils.isFunction(arguments[arguments.length - 1])) {
                    callback = arguments[arguments.length - 1];
                    if (arguments.length === 2)
                        options = null;
                    if (arguments.length === 1) {
                        options = null;
                        indexed = {};
                    }
                }
                var o = this.encode(indexed, options);
                var formatter = this.decode.bind(this);
                return new Filter(o, watches.eth(), formatter, callback);
            };
            /**
             * Should be used to attach event to contract object
             *
             * @method attachToContract
             * @param {Contract}
             */
            SolidityEvent.prototype.attachToContract = function (contract) {
                var execute = this.execute.bind(this);
                var displayName = this.displayName();
                if (!contract[displayName]) {
                    contract[displayName] = execute;
                }
                contract[displayName][this.typeName()] = this.execute.bind(this, contract);
            };
            module.exports = SolidityEvent;
        }, { "../solidity/coder": 7, "../utils/sha3": 19, "../utils/utils": 20, "./filter": 28, "./formatters": 29, "./methods/watches": 40 }], 28: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /** @file filter.js
             * @authors:
             *   Jeffrey Wilcke <jeff@ethdev.com>
             *   Marek Kotewicz <marek@ethdev.com>
             *   Marian Oancea <marian@ethdev.com>
             *   Fabian Vogelsteller <fabian@ethdev.com>
             *   Gav Wood <g@ethdev.com>
             * @date 2014
             */
            var RequestManager = require('./requestmanager');
            var formatters = require('./formatters');
            var utils = require('../utils/utils');
            /**
            * Converts a given topic to a hex string, but also allows null values.
            *
            * @param {Mixed} value
            * @return {String}
            */
            var toTopic = function (value) {
                if (value === null || typeof value === 'undefined')
                    return null;
                value = String(value);
                if (value.indexOf('0x') === 0)
                    return value;
                else
                    return utils.fromUtf8(value);
            };
            /// This method should be called on options object, to verify deprecated properties && lazy load dynamic ones
            /// @param should be string or object
            /// @returns options string or object
            var getOptions = function (options) {
                if (utils.isString(options)) {
                    return options;
                }
                options = options || {};
                // make sure topics, get converted to hex
                options.topics = options.topics || [];
                options.topics = options.topics.map(function (topic) {
                    return (utils.isArray(topic)) ? topic.map(toTopic) : toTopic(topic);
                });
                // lazy load
                return {
                    topics: options.topics,
                    to: options.to,
                    address: options.address,
                    fromBlock: formatters.inputBlockNumberFormatter(options.fromBlock),
                    toBlock: formatters.inputBlockNumberFormatter(options.toBlock)
                };
            };
            /**
            Adds the callback and sets up the methods, to iterate over the results.
            
            @method getLogsAtStart
            @param {Object} self
            @param {funciton}
            */
            var getLogsAtStart = function (self, callback) {
                // call getFilterLogs for the first watch callback start
                if (!utils.isString(self.options)) {
                    self.get(function (err, messages) {
                        // don't send all the responses to all the watches again... just to self one
                        if (err) {
                            callback(err);
                        }
                        if (utils.isArray(messages)) {
                            messages.forEach(function (message) {
                                callback(null, message);
                            });
                        }
                    });
                }
            };
            /**
            Adds the callback and sets up the methods, to iterate over the results.
            
            @method pollFilter
            @param {Object} self
            */
            var pollFilter = function (self) {
                var onMessage = function (error, messages) {
                    if (error) {
                        return self.callbacks.forEach(function (callback) {
                            callback(error);
                        });
                    }
                    if (utils.isArray(messages)) {
                        messages.forEach(function (message) {
                            message = self.formatter ? self.formatter(message) : message;
                            self.callbacks.forEach(function (callback) {
                                callback(null, message);
                            });
                        });
                    }
                };
                RequestManager.getInstance().startPolling({
                    method: self.implementation.poll.call,
                    params: [self.filterId],
                }, self.filterId, onMessage, self.stopWatching.bind(self));
            };
            var Filter = function (options, methods, formatter, callback) {
                var self = this;
                var implementation = {};
                methods.forEach(function (method) {
                    method.attachToObject(implementation);
                });
                this.options = getOptions(options);
                this.implementation = implementation;
                this.filterId = null;
                this.callbacks = [];
                this.getLogsCallbacks = [];
                this.pollFilters = [];
                this.formatter = formatter;
                this.implementation.newFilter(this.options, function (error, id) {
                    if (error) {
                        self.callbacks.forEach(function (cb) {
                            cb(error);
                        });
                    }
                    else {
                        self.filterId = id;
                        // check if there are get pending callbacks as a consequence
                        // of calling get() with filterId unassigned.
                        self.getLogsCallbacks.forEach(function (cb) {
                            self.get(cb);
                        });
                        self.getLogsCallbacks = [];
                        // get filter logs for the already existing watch calls
                        self.callbacks.forEach(function (cb) {
                            getLogsAtStart(self, cb);
                        });
                        if (self.callbacks.length > 0)
                            pollFilter(self);
                        // start to watch immediately
                        if (callback) {
                            return self.watch(callback);
                        }
                    }
                });
                return this;
            };
            Filter.prototype.watch = function (callback) {
                this.callbacks.push(callback);
                if (this.filterId) {
                    getLogsAtStart(this, callback);
                    pollFilter(this);
                }
                return this;
            };
            Filter.prototype.stopWatching = function () {
                RequestManager.getInstance().stopPolling(this.filterId);
                // remove filter async
                this.implementation.uninstallFilter(this.filterId, function () { });
                this.callbacks = [];
            };
            Filter.prototype.get = function (callback) {
                var self = this;
                if (utils.isFunction(callback)) {
                    if (this.filterId === null) {
                        // If filterId is not set yet, call it back
                        // when newFilter() assigns it.
                        this.getLogsCallbacks.push(callback);
                    }
                    else {
                        this.implementation.getLogs(this.filterId, function (err, res) {
                            if (err) {
                                callback(err);
                            }
                            else {
                                callback(null, res.map(function (log) {
                                    return self.formatter ? self.formatter(log) : log;
                                }));
                            }
                        });
                    }
                }
                else {
                    if (this.filterId === null) {
                        throw new Error('Filter ID Error: filter().get() can\'t be chained synchronous, please provide a callback for the get() method.');
                    }
                    var logs = this.implementation.getLogs(this.filterId);
                    return logs.map(function (log) {
                        return self.formatter ? self.formatter(log) : log;
                    });
                }
                return this;
            };
            module.exports = Filter;
        }, { "../utils/utils": 20, "./formatters": 29, "./requestmanager": 43 }], 29: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file formatters.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @author Fabian Vogelsteller <fabian@ethdev.com>
             * @date 2015
             */
            var utils = require('../utils/utils');
            var config = require('../utils/config');
            var Iban = require('./iban');
            /**
             * Should the format output to a big number
             *
             * @method outputBigNumberFormatter
             * @param {String|Number|BigNumber}
             * @returns {BigNumber} object
             */
            var outputBigNumberFormatter = function (number) {
                return utils.toBigNumber(number);
            };
            var isPredefinedBlockNumber = function (blockNumber) {
                return blockNumber === 'latest' || blockNumber === 'pending' || blockNumber === 'earliest';
            };
            var inputDefaultBlockNumberFormatter = function (blockNumber) {
                if (blockNumber === undefined) {
                    return config.defaultBlock;
                }
                return inputBlockNumberFormatter(blockNumber);
            };
            var inputBlockNumberFormatter = function (blockNumber) {
                if (blockNumber === undefined) {
                    return undefined;
                }
                else if (isPredefinedBlockNumber(blockNumber)) {
                    return blockNumber;
                }
                return utils.toHex(blockNumber);
            };
            /**
             * Formats the input of a transaction and converts all values to HEX
             *
             * @method inputCallFormatter
             * @param {Object} transaction options
             * @returns object
            */
            var inputCallFormatter = function (options) {
                options.from = options.from || config.defaultAccount;
                if (options.from) {
                    options.from = inputAddressFormatter(options.from);
                }
                if (options.to) {
                    options.to = inputAddressFormatter(options.to);
                }
                ['gasPrice', 'gas', 'value', 'nonce'].filter(function (key) {
                    return options[key] !== undefined;
                }).forEach(function (key) {
                    options[key] = utils.fromDecimal(options[key]);
                });
                return options;
            };
            /**
             * Formats the input of a transaction and converts all values to HEX
             *
             * @method inputTransactionFormatter
             * @param {Object} transaction options
             * @returns object
            */
            var inputTransactionFormatter = function (options) {
                options.from = options.from || config.defaultAccount;
                options.from = inputAddressFormatter(options.from);
                if (options.to) {
                    options.to = inputAddressFormatter(options.to);
                }
                ['gasPrice', 'gas', 'value', 'nonce'].filter(function (key) {
                    return options[key] !== undefined;
                }).forEach(function (key) {
                    options[key] = utils.fromDecimal(options[key]);
                });
                return options;
            };
            /**
             * Formats the output of a transaction to its proper values
             *
             * @method outputTransactionFormatter
             * @param {Object} tx
             * @returns {Object}
            */
            var outputTransactionFormatter = function (tx) {
                if (tx.blockNumber !== null)
                    tx.blockNumber = utils.toDecimal(tx.blockNumber);
                if (tx.transactionIndex !== null)
                    tx.transactionIndex = utils.toDecimal(tx.transactionIndex);
                tx.nonce = utils.toDecimal(tx.nonce);
                tx.gas = utils.toDecimal(tx.gas);
                tx.gasPrice = utils.toBigNumber(tx.gasPrice);
                tx.value = utils.toBigNumber(tx.value);
                return tx;
            };
            /**
             * Formats the output of a transaction receipt to its proper values
             *
             * @method outputTransactionReceiptFormatter
             * @param {Object} receipt
             * @returns {Object}
            */
            var outputTransactionReceiptFormatter = function (receipt) {
                if (receipt.blockNumber !== null)
                    receipt.blockNumber = utils.toDecimal(receipt.blockNumber);
                if (receipt.transactionIndex !== null)
                    receipt.transactionIndex = utils.toDecimal(receipt.transactionIndex);
                receipt.cumulativeGasUsed = utils.toDecimal(receipt.cumulativeGasUsed);
                receipt.gasUsed = utils.toDecimal(receipt.gasUsed);
                if (utils.isArray(receipt.logs)) {
                    receipt.logs = receipt.logs.map(function (log) {
                        return outputLogFormatter(log);
                    });
                }
                return receipt;
            };
            /**
             * Formats the output of a block to its proper values
             *
             * @method outputBlockFormatter
             * @param {Object} block
             * @returns {Object}
            */
            var outputBlockFormatter = function (block) {
                // transform to number
                block.gasLimit = utils.toDecimal(block.gasLimit);
                block.gasUsed = utils.toDecimal(block.gasUsed);
                block.size = utils.toDecimal(block.size);
                block.timestamp = utils.toDecimal(block.timestamp);
                if (block.number !== null)
                    block.number = utils.toDecimal(block.number);
                block.difficulty = utils.toBigNumber(block.difficulty);
                block.totalDifficulty = utils.toBigNumber(block.totalDifficulty);
                if (utils.isArray(block.transactions)) {
                    block.transactions.forEach(function (item) {
                        if (!utils.isString(item))
                            return outputTransactionFormatter(item);
                    });
                }
                return block;
            };
            /**
             * Formats the output of a log
             *
             * @method outputLogFormatter
             * @param {Object} log object
             * @returns {Object} log
            */
            var outputLogFormatter = function (log) {
                if (log.blockNumber !== null)
                    log.blockNumber = utils.toDecimal(log.blockNumber);
                if (log.transactionIndex !== null)
                    log.transactionIndex = utils.toDecimal(log.transactionIndex);
                if (log.logIndex !== null)
                    log.logIndex = utils.toDecimal(log.logIndex);
                return log;
            };
            /**
             * Formats the input of a whisper post and converts all values to HEX
             *
             * @method inputPostFormatter
             * @param {Object} transaction object
             * @returns {Object}
            */
            var inputPostFormatter = function (post) {
                post.payload = utils.toHex(post.payload);
                post.ttl = utils.fromDecimal(post.ttl);
                post.workToProve = utils.fromDecimal(post.workToProve);
                post.priority = utils.fromDecimal(post.priority);
                // fallback
                if (!utils.isArray(post.topics)) {
                    post.topics = post.topics ? [post.topics] : [];
                }
                // format the following options
                post.topics = post.topics.map(function (topic) {
                    return utils.fromUtf8(topic);
                });
                return post;
            };
            /**
             * Formats the output of a received post message
             *
             * @method outputPostFormatter
             * @param {Object}
             * @returns {Object}
             */
            var outputPostFormatter = function (post) {
                post.expiry = utils.toDecimal(post.expiry);
                post.sent = utils.toDecimal(post.sent);
                post.ttl = utils.toDecimal(post.ttl);
                post.workProved = utils.toDecimal(post.workProved);
                post.payloadRaw = post.payload;
                post.payload = utils.toUtf8(post.payload);
                if (utils.isJson(post.payload)) {
                    post.payload = JSON.parse(post.payload);
                }
                // format the following options
                if (!post.topics) {
                    post.topics = [];
                }
                post.topics = post.topics.map(function (topic) {
                    return utils.toUtf8(topic);
                });
                return post;
            };
            var inputAddressFormatter = function (address) {
                var iban = new Iban(address);
                if (iban.isValid() && iban.isDirect()) {
                    return '0x' + iban.address();
                }
                else if (utils.isStrictAddress(address)) {
                    return address;
                }
                else if (utils.isAddress(address)) {
                    return '0x' + address;
                }
                throw 'invalid address';
            };
            var outputSyncingFormatter = function (result) {
                result.startingBlock = utils.toDecimal(result.startingBlock);
                result.currentBlock = utils.toDecimal(result.currentBlock);
                result.highestBlock = utils.toDecimal(result.highestBlock);
                return result;
            };
            module.exports = {
                inputDefaultBlockNumberFormatter: inputDefaultBlockNumberFormatter,
                inputBlockNumberFormatter: inputBlockNumberFormatter,
                inputCallFormatter: inputCallFormatter,
                inputTransactionFormatter: inputTransactionFormatter,
                inputAddressFormatter: inputAddressFormatter,
                inputPostFormatter: inputPostFormatter,
                outputBigNumberFormatter: outputBigNumberFormatter,
                outputTransactionFormatter: outputTransactionFormatter,
                outputTransactionReceiptFormatter: outputTransactionReceiptFormatter,
                outputBlockFormatter: outputBlockFormatter,
                outputLogFormatter: outputLogFormatter,
                outputPostFormatter: outputPostFormatter,
                outputSyncingFormatter: outputSyncingFormatter
            };
        }, { "../utils/config": 18, "../utils/utils": 20, "./iban": 32 }], 30: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file function.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var web3 = require('../web3');
            var coder = require('../solidity/coder');
            var utils = require('../utils/utils');
            var formatters = require('./formatters');
            var sha3 = require('../utils/sha3');
            /**
             * This prototype should be used to call/sendTransaction to solidity functions
             */
            var SolidityFunction = function (json, address) {
                this._inputTypes = json.inputs.map(function (i) {
                    return i.type;
                });
                this._outputTypes = json.outputs.map(function (i) {
                    return i.type;
                });
                this._constant = json.constant;
                this._name = utils.transformToFullName(json);
                this._address = address;
            };
            SolidityFunction.prototype.extractCallback = function (args) {
                if (utils.isFunction(args[args.length - 1])) {
                    return args.pop(); // modify the args array!
                }
            };
            SolidityFunction.prototype.extractDefaultBlock = function (args) {
                if (args.length > this._inputTypes.length && !utils.isObject(args[args.length - 1])) {
                    return formatters.inputDefaultBlockNumberFormatter(args.pop()); // modify the args array!
                }
            };
            /**
             * Should be used to create payload from arguments
             *
             * @method toPayload
             * @param {Array} solidity function params
             * @param {Object} optional payload options
             */
            SolidityFunction.prototype.toPayload = function (args) {
                var options = {};
                if (args.length > this._inputTypes.length && utils.isObject(args[args.length - 1])) {
                    options = args[args.length - 1];
                }
                options.to = this._address;
                options.data = '0x' + this.signature() + coder.encodeParams(this._inputTypes, args);
                return options;
            };
            /**
             * Should be used to get function signature
             *
             * @method signature
             * @return {String} function signature
             */
            SolidityFunction.prototype.signature = function () {
                return sha3(this._name).slice(0, 8);
            };
            SolidityFunction.prototype.unpackOutput = function (output) {
                if (!output) {
                    return;
                }
                output = output.length >= 2 ? output.slice(2) : output;
                var result = coder.decodeParams(this._outputTypes, output);
                return result.length === 1 ? result[0] : result;
            };
            /**
             * Calls a contract function.
             *
             * @method call
             * @param {...Object} Contract function arguments
             * @param {function} If the last argument is a function, the contract function
             *   call will be asynchronous, and the callback will be passed the
             *   error and result.
             * @return {String} output bytes
             */
            SolidityFunction.prototype.call = function () {
                var args = Array.prototype.slice.call(arguments).filter(function (a) { return a !== undefined; });
                var callback = this.extractCallback(args);
                var defaultBlock = this.extractDefaultBlock(args);
                var payload = this.toPayload(args);
                if (!callback) {
                    var output = web3.eth.call(payload, defaultBlock);
                    return this.unpackOutput(output);
                }
                var self = this;
                web3.eth.call(payload, defaultBlock, function (error, output) {
                    callback(error, self.unpackOutput(output));
                });
            };
            /**
             * Should be used to sendTransaction to solidity function
             *
             * @method sendTransaction
             * @param {Object} options
             */
            SolidityFunction.prototype.sendTransaction = function () {
                var args = Array.prototype.slice.call(arguments).filter(function (a) { return a !== undefined; });
                var callback = this.extractCallback(args);
                var payload = this.toPayload(args);
                if (!callback) {
                    return web3.eth.sendTransaction(payload);
                }
                web3.eth.sendTransaction(payload, callback);
            };
            /**
             * Should be used to estimateGas of solidity function
             *
             * @method estimateGas
             * @param {Object} options
             */
            SolidityFunction.prototype.estimateGas = function () {
                var args = Array.prototype.slice.call(arguments);
                var callback = this.extractCallback(args);
                var payload = this.toPayload(args);
                if (!callback) {
                    return web3.eth.estimateGas(payload);
                }
                web3.eth.estimateGas(payload, callback);
            };
            /**
             * Should be used to get function display name
             *
             * @method displayName
             * @return {String} display name of the function
             */
            SolidityFunction.prototype.displayName = function () {
                return utils.extractDisplayName(this._name);
            };
            /**
             * Should be used to get function type name
             *
             * @method typeName
             * @return {String} type name of the function
             */
            SolidityFunction.prototype.typeName = function () {
                return utils.extractTypeName(this._name);
            };
            /**
             * Should be called to get rpc requests from solidity function
             *
             * @method request
             * @returns {Object}
             */
            SolidityFunction.prototype.request = function () {
                var args = Array.prototype.slice.call(arguments);
                var callback = this.extractCallback(args);
                var payload = this.toPayload(args);
                var format = this.unpackOutput.bind(this);
                return {
                    method: this._constant ? 'eth_call' : 'eth_sendTransaction',
                    callback: callback,
                    params: [payload],
                    format: format
                };
            };
            /**
             * Should be called to execute function
             *
             * @method execute
             */
            SolidityFunction.prototype.execute = function () {
                var transaction = !this._constant;
                // send transaction
                if (transaction) {
                    return this.sendTransaction.apply(this, Array.prototype.slice.call(arguments));
                }
                // call
                return this.call.apply(this, Array.prototype.slice.call(arguments));
            };
            /**
             * Should be called to attach function to contract
             *
             * @method attachToContract
             * @param {Contract}
             */
            SolidityFunction.prototype.attachToContract = function (contract) {
                var execute = this.execute.bind(this);
                execute.request = this.request.bind(this);
                execute.call = this.call.bind(this);
                execute.sendTransaction = this.sendTransaction.bind(this);
                execute.estimateGas = this.estimateGas.bind(this);
                var displayName = this.displayName();
                if (!contract[displayName]) {
                    contract[displayName] = execute;
                }
                contract[displayName][this.typeName()] = execute; // circular!!!!
            };
            module.exports = SolidityFunction;
        }, { "../solidity/coder": 7, "../utils/sha3": 19, "../utils/utils": 20, "../web3": 22, "./formatters": 29 }], 31: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /** @file httpprovider.js
             * @authors:
             *   Marek Kotewicz <marek@ethdev.com>
             *   Marian Oancea <marian@ethdev.com>
             *   Fabian Vogelsteller <fabian@ethdev.com>
             * @date 2015
             */
            "use strict";
            var errors = require('./errors');
            // workaround to use httpprovider in different envs
            var XMLHttpRequest; // jshint ignore: line
            // meteor server environment
            if (typeof Meteor !== 'undefined' && Meteor.isServer) {
                XMLHttpRequest = Npm.require('xmlhttprequest').XMLHttpRequest; // jshint ignore: line
            }
            else if (typeof window !== 'undefined' && window.XMLHttpRequest) {
                XMLHttpRequest = window.XMLHttpRequest; // jshint ignore: line
            }
            else {
                XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // jshint ignore: line
            }
            /**
             * HttpProvider should be used to send rpc calls over http
             */
            var HttpProvider = function (host) {
                this.host = host || 'http://localhost:8545';
            };
            /**
             * Should be called to prepare new XMLHttpRequest
             *
             * @method prepareRequest
             * @param {Boolean} true if request should be async
             * @return {XMLHttpRequest} object
             */
            HttpProvider.prototype.prepareRequest = function (async) {
                var request = new XMLHttpRequest();
                request.open('POST', this.host, async);
                request.setRequestHeader('Content-Type', 'application/json');
                return request;
            };
            /**
             * Should be called to make sync request
             *
             * @method send
             * @param {Object} payload
             * @return {Object} result
             */
            HttpProvider.prototype.send = function (payload) {
                var request = this.prepareRequest(false);
                try {
                    request.send(JSON.stringify(payload));
                }
                catch (error) {
                    throw errors.InvalidConnection(this.host);
                }
                var result = request.responseText;
                try {
                    result = JSON.parse(result);
                }
                catch (e) {
                    throw errors.InvalidResponse(request.responseText);
                }
                return result;
            };
            /**
             * Should be used to make async request
             *
             * @method sendAsync
             * @param {Object} payload
             * @param {Function} callback triggered on end with (err, result)
             */
            HttpProvider.prototype.sendAsync = function (payload, callback) {
                var request = this.prepareRequest(true);
                request.onreadystatechange = function () {
                    if (request.readyState === 4) {
                        var result = request.responseText;
                        var error = null;
                        try {
                            result = JSON.parse(result);
                        }
                        catch (e) {
                            error = errors.InvalidResponse(request.responseText);
                        }
                        callback(error, result);
                    }
                };
                try {
                    request.send(JSON.stringify(payload));
                }
                catch (error) {
                    callback(errors.InvalidConnection(this.host));
                }
            };
            /**
             * Synchronously tries to make Http request
             *
             * @method isConnected
             * @return {Boolean} returns true if request haven't failed. Otherwise false
             */
            HttpProvider.prototype.isConnected = function () {
                try {
                    this.send({
                        id: 9999999999,
                        jsonrpc: '2.0',
                        method: 'net_listening',
                        params: []
                    });
                    return true;
                }
                catch (e) {
                    return false;
                }
            };
            module.exports = HttpProvider;
        }, { "./errors": 26, "xmlhttprequest": 17 }], 32: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file iban.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var BigNumber = require('bignumber.js');
            var padLeft = function (string, bytes) {
                var result = string;
                while (result.length < bytes * 2) {
                    result = '00' + result;
                }
                return result;
            };
            /**
             * Prepare an IBAN for mod 97 computation by moving the first 4 chars to the end and transforming the letters to
             * numbers (A = 10, B = 11, ..., Z = 35), as specified in ISO13616.
             *
             * @method iso13616Prepare
             * @param {String} iban the IBAN
             * @returns {String} the prepared IBAN
             */
            var iso13616Prepare = function (iban) {
                var A = 'A'.charCodeAt(0);
                var Z = 'Z'.charCodeAt(0);
                iban = iban.toUpperCase();
                iban = iban.substr(4) + iban.substr(0, 4);
                return iban.split('').map(function (n) {
                    var code = n.charCodeAt(0);
                    if (code >= A && code <= Z) {
                        // A = 10, B = 11, ... Z = 35
                        return code - A + 10;
                    }
                    else {
                        return n;
                    }
                }).join('');
            };
            /**
             * Calculates the MOD 97 10 of the passed IBAN as specified in ISO7064.
             *
             * @method mod9710
             * @param {String} iban
             * @returns {Number}
             */
            var mod9710 = function (iban) {
                var remainder = iban, block;
                while (remainder.length > 2) {
                    block = remainder.slice(0, 9);
                    remainder = parseInt(block, 10) % 97 + remainder.slice(block.length);
                }
                return parseInt(remainder, 10) % 97;
            };
            /**
             * This prototype should be used to create iban object from iban correct string
             *
             * @param {String} iban
             */
            var Iban = function (iban) {
                this._iban = iban;
            };
            /**
             * This method should be used to create iban object from ethereum address
             *
             * @method fromAddress
             * @param {String} address
             * @return {Iban} the IBAN object
             */
            Iban.fromAddress = function (address) {
                var asBn = new BigNumber(address, 16);
                var base36 = asBn.toString(36);
                var padded = padLeft(base36, 15);
                return Iban.fromBban(padded.toUpperCase());
            };
            /**
             * Convert the passed BBAN to an IBAN for this country specification.
             * Please note that <i>"generation of the IBAN shall be the exclusive responsibility of the bank/branch servicing the account"</i>.
             * This method implements the preferred algorithm described in http://en.wikipedia.org/wiki/International_Bank_Account_Number#Generating_IBAN_check_digits
             *
             * @method fromBban
             * @param {String} bban the BBAN to convert to IBAN
             * @returns {Iban} the IBAN object
             */
            Iban.fromBban = function (bban) {
                var countryCode = 'XE';
                var remainder = mod9710(iso13616Prepare(countryCode + '00' + bban));
                var checkDigit = ('0' + (98 - remainder)).slice(-2);
                return new Iban(countryCode + checkDigit + bban);
            };
            /**
             * Should be used to create IBAN object for given institution and identifier
             *
             * @method createIndirect
             * @param {Object} options, required options are "institution" and "identifier"
             * @return {Iban} the IBAN object
             */
            Iban.createIndirect = function (options) {
                return Iban.fromBban('ETH' + options.institution + options.identifier);
            };
            /**
             * Thos method should be used to check if given string is valid iban object
             *
             * @method isValid
             * @param {String} iban string
             * @return {Boolean} true if it is valid IBAN
             */
            Iban.isValid = function (iban) {
                var i = new Iban(iban);
                return i.isValid();
            };
            /**
             * Should be called to check if iban is correct
             *
             * @method isValid
             * @returns {Boolean} true if it is, otherwise false
             */
            Iban.prototype.isValid = function () {
                return /^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(this._iban) &&
                    mod9710(iso13616Prepare(this._iban)) === 1;
            };
            /**
             * Should be called to check if iban number is direct
             *
             * @method isDirect
             * @returns {Boolean} true if it is, otherwise false
             */
            Iban.prototype.isDirect = function () {
                return this._iban.length === 34 || this._iban.length === 35;
            };
            /**
             * Should be called to check if iban number if indirect
             *
             * @method isIndirect
             * @returns {Boolean} true if it is, otherwise false
             */
            Iban.prototype.isIndirect = function () {
                return this._iban.length === 20;
            };
            /**
             * Should be called to get iban checksum
             * Uses the mod-97-10 checksumming protocol (ISO/IEC 7064:2003)
             *
             * @method checksum
             * @returns {String} checksum
             */
            Iban.prototype.checksum = function () {
                return this._iban.substr(2, 2);
            };
            /**
             * Should be called to get institution identifier
             * eg. XREG
             *
             * @method institution
             * @returns {String} institution identifier
             */
            Iban.prototype.institution = function () {
                return this.isIndirect() ? this._iban.substr(7, 4) : '';
            };
            /**
             * Should be called to get client identifier within institution
             * eg. GAVOFYORK
             *
             * @method client
             * @returns {String} client identifier
             */
            Iban.prototype.client = function () {
                return this.isIndirect() ? this._iban.substr(11) : '';
            };
            /**
             * Should be called to get client direct address
             *
             * @method address
             * @returns {String} client direct address
             */
            Iban.prototype.address = function () {
                if (this.isDirect()) {
                    var base36 = this._iban.substr(4);
                    var asBn = new BigNumber(base36, 36);
                    return padLeft(asBn.toString(16), 20);
                }
                return '';
            };
            Iban.prototype.toString = function () {
                return this._iban;
            };
            module.exports = Iban;
        }, { "bignumber.js": "bignumber.js" }], 33: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /** @file ipcprovider.js
             * @authors:
             *   Fabian Vogelsteller <fabian@ethdev.com>
             * @date 2015
             */
            "use strict";
            var utils = require('../utils/utils');
            var errors = require('./errors');
            var errorTimeout = function (method, id) {
                var err = {
                    "jsonrpc": "2.0",
                    "error": {
                        "code": -32603,
                        "message": "IPC Request timed out for method  \'" + method + "\'"
                    },
                    "id": id
                };
                return JSON.stringify(err);
            };
            var IpcProvider = function (path, net) {
                var _this = this;
                this.responseCallbacks = {};
                this.path = path;
                this.connection = net.connect({ path: this.path });
                this.connection.on('error', function (e) {
                    console.error('IPC Connection Error', e);
                    _this._timeout();
                });
                this.connection.on('end', function () {
                    _this._timeout();
                });
                // LISTEN FOR CONNECTION RESPONSES
                this.connection.on('data', function (data) {
                    /*jshint maxcomplexity: 6 */
                    _this._parseResponse(data.toString()).forEach(function (result) {
                        var id = null;
                        // get the id which matches the returned id
                        if (utils.isArray(result)) {
                            result.forEach(function (load) {
                                if (_this.responseCallbacks[load.id])
                                    id = load.id;
                            });
                        }
                        else {
                            id = result.id;
                        }
                        // fire the callback
                        if (_this.responseCallbacks[id]) {
                            _this.responseCallbacks[id](null, result);
                            delete _this.responseCallbacks[id];
                        }
                    });
                });
            };
            /**
            Will parse the response and make an array out of it.
            
            @method _parseResponse
            @param {String} data
            */
            IpcProvider.prototype._parseResponse = function (data) {
                var _this = this, returnValues = [];
                // DE-CHUNKER
                var dechunkedData = data
                    .replace(/\}\{/g, '}|--|{') // }{
                    .replace(/\}\]\[\{/g, '}]|--|[{') // }][{
                    .replace(/\}\[\{/g, '}|--|[{') // }[{
                    .replace(/\}\]\{/g, '}]|--|{') // }]{
                    .split('|--|');
                dechunkedData.forEach(function (data) {
                    // prepend the last chunk
                    if (_this.lastChunk)
                        data = _this.lastChunk + data;
                    var result = null;
                    try {
                        result = JSON.parse(data);
                    }
                    catch (e) {
                        _this.lastChunk = data;
                        // start timeout to cancel all requests
                        clearTimeout(_this.lastChunkTimeout);
                        _this.lastChunkTimeout = setTimeout(function () {
                            _this.timeout();
                            throw errors.InvalidResponse(data);
                        }, 1000 * 15);
                        return;
                    }
                    // cancel timeout and set chunk to null
                    clearTimeout(_this.lastChunkTimeout);
                    _this.lastChunk = null;
                    if (result)
                        returnValues.push(result);
                });
                return returnValues;
            };
            /**
            Get the adds a callback to the responseCallbacks object,
            which will be called if a response matching the response Id will arrive.
            
            @method _addResponseCallback
            */
            IpcProvider.prototype._addResponseCallback = function (payload, callback) {
                var id = payload.id || payload[0].id;
                var method = payload.method || payload[0].method;
                this.responseCallbacks[id] = callback;
                this.responseCallbacks[id].method = method;
            };
            /**
            Timeout all requests when the end/error event is fired
            
            @method _timeout
            */
            IpcProvider.prototype._timeout = function () {
                for (var key in this.responseCallbacks) {
                    if (this.responseCallbacks.hasOwnProperty(key)) {
                        this.responseCallbacks[key](errorTimeout(this.responseCallbacks[key].method, key));
                        delete this.responseCallbacks[key];
                    }
                }
            };
            /**
            Check if the current connection is still valid.
            
            @method isConnected
            */
            IpcProvider.prototype.isConnected = function () {
                var _this = this;
                // try reconnect, when connection is gone
                if (!_this.connection.writable)
                    _this.connection.connect({ path: _this.path });
                return !!this.connection.writable;
            };
            IpcProvider.prototype.send = function (payload) {
                if (this.connection.writeSync) {
                    var result;
                    // try reconnect, when connection is gone
                    if (!this.connection.writable)
                        this.connection.connect({ path: this.path });
                    var data = this.connection.writeSync(JSON.stringify(payload));
                    try {
                        result = JSON.parse(data);
                    }
                    catch (e) {
                        throw errors.InvalidResponse(data);
                    }
                    return result;
                }
                else {
                    throw new Error('You tried to send "' + payload.method + '" synchronously. Synchronous requests are not supported by the IPC provider.');
                }
            };
            IpcProvider.prototype.sendAsync = function (payload, callback) {
                // try reconnect, when connection is gone
                if (!this.connection.writable)
                    this.connection.connect({ path: this.path });
                this.connection.write(JSON.stringify(payload));
                this._addResponseCallback(payload, callback);
            };
            module.exports = IpcProvider;
        }, { "../utils/utils": 20, "./errors": 26 }], 34: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /** @file jsonrpc.js
             * @authors:
             *   Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var Jsonrpc = function () {
                // singleton pattern
                if (arguments.callee._singletonInstance) {
                    return arguments.callee._singletonInstance;
                }
                arguments.callee._singletonInstance = this;
                this.messageId = 1;
            };
            /**
             * @return {Jsonrpc} singleton
             */
            Jsonrpc.getInstance = function () {
                var instance = new Jsonrpc();
                return instance;
            };
            /**
             * Should be called to valid json create payload object
             *
             * @method toPayload
             * @param {Function} method of jsonrpc call, required
             * @param {Array} params, an array of method params, optional
             * @returns {Object} valid jsonrpc payload object
             */
            Jsonrpc.prototype.toPayload = function (method, params) {
                if (!method)
                    console.error('jsonrpc method should be specified!');
                return {
                    jsonrpc: '2.0',
                    method: method,
                    params: params || [],
                    id: this.messageId++
                };
            };
            /**
             * Should be called to check if jsonrpc response is valid
             *
             * @method isValidResponse
             * @param {Object}
             * @returns {Boolean} true if response is valid, otherwise false
             */
            Jsonrpc.prototype.isValidResponse = function (response) {
                return !!response &&
                    !response.error &&
                    response.jsonrpc === '2.0' &&
                    typeof response.id === 'number' &&
                    response.result !== undefined; // only undefined is not valid json object
            };
            /**
             * Should be called to create batch payload object
             *
             * @method toBatchPayload
             * @param {Array} messages, an array of objects with method (required) and params (optional) fields
             * @returns {Array} batch payload
             */
            Jsonrpc.prototype.toBatchPayload = function (messages) {
                var self = this;
                return messages.map(function (message) {
                    return self.toPayload(message.method, message.params);
                });
            };
            module.exports = Jsonrpc;
        }, {}], 35: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file method.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var RequestManager = require('./requestmanager');
            var utils = require('../utils/utils');
            var errors = require('./errors');
            var Method = function (options) {
                this.name = options.name;
                this.call = options.call;
                this.params = options.params || 0;
                this.inputFormatter = options.inputFormatter;
                this.outputFormatter = options.outputFormatter;
            };
            /**
             * Should be used to determine name of the jsonrpc method based on arguments
             *
             * @method getCall
             * @param {Array} arguments
             * @return {String} name of jsonrpc method
             */
            Method.prototype.getCall = function (args) {
                return utils.isFunction(this.call) ? this.call(args) : this.call;
            };
            /**
             * Should be used to extract callback from array of arguments. Modifies input param
             *
             * @method extractCallback
             * @param {Array} arguments
             * @return {Function|Null} callback, if exists
             */
            Method.prototype.extractCallback = function (args) {
                if (utils.isFunction(args[args.length - 1])) {
                    return args.pop(); // modify the args array!
                }
            };
            /**
             * Should be called to check if the number of arguments is correct
             *
             * @method validateArgs
             * @param {Array} arguments
             * @throws {Error} if it is not
             */
            Method.prototype.validateArgs = function (args) {
                if (args.length !== this.params) {
                    throw errors.InvalidNumberOfParams();
                }
            };
            /**
             * Should be called to format input args of method
             *
             * @method formatInput
             * @param {Array}
             * @return {Array}
             */
            Method.prototype.formatInput = function (args) {
                if (!this.inputFormatter) {
                    return args;
                }
                return this.inputFormatter.map(function (formatter, index) {
                    return formatter ? formatter(args[index]) : args[index];
                });
            };
            /**
             * Should be called to format output(result) of method
             *
             * @method formatOutput
             * @param {Object}
             * @return {Object}
             */
            Method.prototype.formatOutput = function (result) {
                return this.outputFormatter && result ? this.outputFormatter(result) : result;
            };
            /**
             * Should attach function to method
             *
             * @method attachToObject
             * @param {Object}
             * @param {Function}
             */
            Method.prototype.attachToObject = function (obj) {
                var func = this.send.bind(this);
                func.request = this.request.bind(this);
                func.call = this.call; // that's ugly. filter.js uses it
                var name = this.name.split('.');
                if (name.length > 1) {
                    obj[name[0]] = obj[name[0]] || {};
                    obj[name[0]][name[1]] = func;
                }
                else {
                    obj[name[0]] = func;
                }
            };
            /**
             * Should create payload from given input args
             *
             * @method toPayload
             * @param {Array} args
             * @return {Object}
             */
            Method.prototype.toPayload = function (args) {
                var call = this.getCall(args);
                var callback = this.extractCallback(args);
                var params = this.formatInput(args);
                this.validateArgs(params);
                return {
                    method: call,
                    params: params,
                    callback: callback
                };
            };
            /**
             * Should be called to create pure JSONRPC request which can be used in batch request
             *
             * @method request
             * @param {...} params
             * @return {Object} jsonrpc request
             */
            Method.prototype.request = function () {
                var payload = this.toPayload(Array.prototype.slice.call(arguments));
                payload.format = this.formatOutput.bind(this);
                return payload;
            };
            /**
             * Should send request to the API
             *
             * @method send
             * @param list of params
             * @return result
             */
            Method.prototype.send = function () {
                var payload = this.toPayload(Array.prototype.slice.call(arguments));
                if (payload.callback) {
                    var self = this;
                    return RequestManager.getInstance().sendAsync(payload, function (err, result) {
                        payload.callback(err, self.formatOutput(result));
                    });
                }
                return this.formatOutput(RequestManager.getInstance().send(payload));
            };
            module.exports = Method;
        }, { "../utils/utils": 20, "./errors": 26, "./requestmanager": 43 }], 36: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /** @file db.js
             * @authors:
             *   Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var Method = require('../method');
            var putString = new Method({
                name: 'putString',
                call: 'db_putString',
                params: 3
            });
            var getString = new Method({
                name: 'getString',
                call: 'db_getString',
                params: 2
            });
            var putHex = new Method({
                name: 'putHex',
                call: 'db_putHex',
                params: 3
            });
            var getHex = new Method({
                name: 'getHex',
                call: 'db_getHex',
                params: 2
            });
            var methods = [
                putString, getString, putHex, getHex
            ];
            module.exports = {
                methods: methods
            };
        }, { "../method": 35 }], 37: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file eth.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @author Fabian Vogelsteller <fabian@ethdev.com>
             * @date 2015
             */
            /**
             * Web3
             *
             * @module web3
             */
            /**
             * Eth methods and properties
             *
             * An example method object can look as follows:
             *
             *      {
             *      name: 'getBlock',
             *      call: blockCall,
             *      params: 2,
             *      outputFormatter: formatters.outputBlockFormatter,
             *      inputFormatter: [ // can be a formatter funciton or an array of functions. Where each item in the array will be used for one parameter
             *           utils.toHex, // formats paramter 1
             *           function(param){ return !!param; } // formats paramter 2
             *         ]
             *       },
             *
             * @class [web3] eth
             * @constructor
             */
            "use strict";
            var formatters = require('../formatters');
            var utils = require('../../utils/utils');
            var Method = require('../method');
            var Property = require('../property');
            var blockCall = function (args) {
                return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? "eth_getBlockByHash" : "eth_getBlockByNumber";
            };
            var transactionFromBlockCall = function (args) {
                return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getTransactionByBlockHashAndIndex' : 'eth_getTransactionByBlockNumberAndIndex';
            };
            var uncleCall = function (args) {
                return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getUncleByBlockHashAndIndex' : 'eth_getUncleByBlockNumberAndIndex';
            };
            var getBlockTransactionCountCall = function (args) {
                return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getBlockTransactionCountByHash' : 'eth_getBlockTransactionCountByNumber';
            };
            var uncleCountCall = function (args) {
                return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getUncleCountByBlockHash' : 'eth_getUncleCountByBlockNumber';
            };
            /// @returns an array of objects describing web3.eth api methods
            var getBalance = new Method({
                name: 'getBalance',
                call: 'eth_getBalance',
                params: 2,
                inputFormatter: [formatters.inputAddressFormatter, formatters.inputDefaultBlockNumberFormatter],
                outputFormatter: formatters.outputBigNumberFormatter
            });
            var getStorageAt = new Method({
                name: 'getStorageAt',
                call: 'eth_getStorageAt',
                params: 3,
                inputFormatter: [null, utils.toHex, formatters.inputDefaultBlockNumberFormatter]
            });
            var getCode = new Method({
                name: 'getCode',
                call: 'eth_getCode',
                params: 2,
                inputFormatter: [formatters.inputAddressFormatter, formatters.inputDefaultBlockNumberFormatter]
            });
            var getBlock = new Method({
                name: 'getBlock',
                call: blockCall,
                params: 2,
                inputFormatter: [formatters.inputBlockNumberFormatter, function (val) { return !!val; }],
                outputFormatter: formatters.outputBlockFormatter
            });
            var getUncle = new Method({
                name: 'getUncle',
                call: uncleCall,
                params: 2,
                inputFormatter: [formatters.inputBlockNumberFormatter, utils.toHex],
                outputFormatter: formatters.outputBlockFormatter,
            });
            var getCompilers = new Method({
                name: 'getCompilers',
                call: 'eth_getCompilers',
                params: 0
            });
            var getBlockTransactionCount = new Method({
                name: 'getBlockTransactionCount',
                call: getBlockTransactionCountCall,
                params: 1,
                inputFormatter: [formatters.inputBlockNumberFormatter],
                outputFormatter: utils.toDecimal
            });
            var getBlockUncleCount = new Method({
                name: 'getBlockUncleCount',
                call: uncleCountCall,
                params: 1,
                inputFormatter: [formatters.inputBlockNumberFormatter],
                outputFormatter: utils.toDecimal
            });
            var getTransaction = new Method({
                name: 'getTransaction',
                call: 'eth_getTransactionByHash',
                params: 1,
                outputFormatter: formatters.outputTransactionFormatter
            });
            var getTransactionFromBlock = new Method({
                name: 'getTransactionFromBlock',
                call: transactionFromBlockCall,
                params: 2,
                inputFormatter: [formatters.inputBlockNumberFormatter, utils.toHex],
                outputFormatter: formatters.outputTransactionFormatter
            });
            var getTransactionReceipt = new Method({
                name: 'getTransactionReceipt',
                call: 'eth_getTransactionReceipt',
                params: 1,
                outputFormatter: formatters.outputTransactionReceiptFormatter
            });
            var getTransactionCount = new Method({
                name: 'getTransactionCount',
                call: 'eth_getTransactionCount',
                params: 2,
                inputFormatter: [null, formatters.inputDefaultBlockNumberFormatter],
                outputFormatter: utils.toDecimal
            });
            var sendRawTransaction = new Method({
                name: 'sendRawTransaction',
                call: 'eth_sendRawTransaction',
                params: 1,
                inputFormatter: [null]
            });
            var sendTransaction = new Method({
                name: 'sendTransaction',
                call: 'eth_sendTransaction',
                params: 1,
                inputFormatter: [formatters.inputTransactionFormatter]
            });
            var call = new Method({
                name: 'call',
                call: 'eth_call',
                params: 2,
                inputFormatter: [formatters.inputCallFormatter, formatters.inputDefaultBlockNumberFormatter]
            });
            var estimateGas = new Method({
                name: 'estimateGas',
                call: 'eth_estimateGas',
                params: 1,
                inputFormatter: [formatters.inputCallFormatter],
                outputFormatter: utils.toDecimal
            });
            var compileSolidity = new Method({
                name: 'compile.solidity',
                call: 'eth_compileSolidity',
                params: 1
            });
            var compileLLL = new Method({
                name: 'compile.lll',
                call: 'eth_compileLLL',
                params: 1
            });
            var compileSerpent = new Method({
                name: 'compile.serpent',
                call: 'eth_compileSerpent',
                params: 1
            });
            var submitWork = new Method({
                name: 'submitWork',
                call: 'eth_submitWork',
                params: 3
            });
            var getWork = new Method({
                name: 'getWork',
                call: 'eth_getWork',
                params: 0
            });
            var methods = [
                getBalance,
                getStorageAt,
                getCode,
                getBlock,
                getUncle,
                getCompilers,
                getBlockTransactionCount,
                getBlockUncleCount,
                getTransaction,
                getTransactionFromBlock,
                getTransactionReceipt,
                getTransactionCount,
                call,
                estimateGas,
                sendRawTransaction,
                sendTransaction,
                compileSolidity,
                compileLLL,
                compileSerpent,
                submitWork,
                getWork
            ];
            /// @returns an array of objects describing web3.eth api properties
            var properties = [
                new Property({
                    name: 'coinbase',
                    getter: 'eth_coinbase'
                }),
                new Property({
                    name: 'mining',
                    getter: 'eth_mining'
                }),
                new Property({
                    name: 'hashrate',
                    getter: 'eth_hashrate',
                    outputFormatter: utils.toDecimal
                }),
                new Property({
                    name: 'syncing',
                    getter: 'eth_syncing',
                    outputFormatter: formatters.outputSyncingFormatter
                }),
                new Property({
                    name: 'gasPrice',
                    getter: 'eth_gasPrice',
                    outputFormatter: formatters.outputBigNumberFormatter
                }),
                new Property({
                    name: 'accounts',
                    getter: 'eth_accounts'
                }),
                new Property({
                    name: 'blockNumber',
                    getter: 'eth_blockNumber',
                    outputFormatter: utils.toDecimal
                })
            ];
            module.exports = {
                methods: methods,
                properties: properties
            };
        }, { "../../utils/utils": 20, "../formatters": 29, "../method": 35, "../property": 42 }], 38: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /** @file eth.js
             * @authors:
             *   Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var utils = require('../../utils/utils');
            var Property = require('../property');
            /// @returns an array of objects describing web3.eth api methods
            var methods = [];
            /// @returns an array of objects describing web3.eth api properties
            var properties = [
                new Property({
                    name: 'listening',
                    getter: 'net_listening'
                }),
                new Property({
                    name: 'peerCount',
                    getter: 'net_peerCount',
                    outputFormatter: utils.toDecimal
                })
            ];
            module.exports = {
                methods: methods,
                properties: properties
            };
        }, { "../../utils/utils": 20, "../property": 42 }], 39: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /** @file shh.js
             * @authors:
             *   Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var Method = require('../method');
            var formatters = require('../formatters');
            var post = new Method({
                name: 'post',
                call: 'shh_post',
                params: 1,
                inputFormatter: [formatters.inputPostFormatter]
            });
            var newIdentity = new Method({
                name: 'newIdentity',
                call: 'shh_newIdentity',
                params: 0
            });
            var hasIdentity = new Method({
                name: 'hasIdentity',
                call: 'shh_hasIdentity',
                params: 1
            });
            var newGroup = new Method({
                name: 'newGroup',
                call: 'shh_newGroup',
                params: 0
            });
            var addToGroup = new Method({
                name: 'addToGroup',
                call: 'shh_addToGroup',
                params: 0
            });
            var methods = [
                post,
                newIdentity,
                hasIdentity,
                newGroup,
                addToGroup
            ];
            module.exports = {
                methods: methods
            };
        }, { "../formatters": 29, "../method": 35 }], 40: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /** @file watches.js
             * @authors:
             *   Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var Method = require('../method');
            /// @returns an array of objects describing web3.eth.filter api methods
            var eth = function () {
                var newFilterCall = function (args) {
                    var type = args[0];
                    switch (type) {
                        case 'latest':
                            args.shift();
                            this.params = 0;
                            return 'eth_newBlockFilter';
                        case 'pending':
                            args.shift();
                            this.params = 0;
                            return 'eth_newPendingTransactionFilter';
                        default:
                            return 'eth_newFilter';
                    }
                };
                var newFilter = new Method({
                    name: 'newFilter',
                    call: newFilterCall,
                    params: 1
                });
                var uninstallFilter = new Method({
                    name: 'uninstallFilter',
                    call: 'eth_uninstallFilter',
                    params: 1
                });
                var getLogs = new Method({
                    name: 'getLogs',
                    call: 'eth_getFilterLogs',
                    params: 1
                });
                var poll = new Method({
                    name: 'poll',
                    call: 'eth_getFilterChanges',
                    params: 1
                });
                return [
                    newFilter,
                    uninstallFilter,
                    getLogs,
                    poll
                ];
            };
            /// @returns an array of objects describing web3.shh.watch api methods
            var shh = function () {
                var newFilter = new Method({
                    name: 'newFilter',
                    call: 'shh_newFilter',
                    params: 1
                });
                var uninstallFilter = new Method({
                    name: 'uninstallFilter',
                    call: 'shh_uninstallFilter',
                    params: 1
                });
                var getLogs = new Method({
                    name: 'getLogs',
                    call: 'shh_getMessages',
                    params: 1
                });
                var poll = new Method({
                    name: 'poll',
                    call: 'shh_getFilterChanges',
                    params: 1
                });
                return [
                    newFilter,
                    uninstallFilter,
                    getLogs,
                    poll
                ];
            };
            module.exports = {
                eth: eth,
                shh: shh
            };
        }, { "../method": 35 }], 41: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file namereg.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var contract = require('./contract');
            var globalRegistrarAbi = require('../contracts/GlobalRegistrar.json');
            var icapRegistrarAbi = require('../contracts/ICAPRegistrar.json');
            var globalNameregAddress = '0xc6d9d2cd449a754c494264e1809c50e34d64562b';
            var ibanNameregAddress = '0xa1a111bc074c9cfa781f0c38e63bd51c91b8af00';
            module.exports = {
                namereg: contract(globalRegistrarAbi).at(globalNameregAddress),
                ibanNamereg: contract(icapRegistrarAbi).at(ibanNameregAddress)
            };
        }, { "../contracts/GlobalRegistrar.json": 1, "../contracts/ICAPRegistrar.json": 2, "./contract": 25 }], 42: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file property.js
             * @author Fabian Vogelsteller <fabian@frozeman.de>
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var RequestManager = require('./requestmanager');
            var utils = require('../utils/utils');
            var Property = function (options) {
                this.name = options.name;
                this.getter = options.getter;
                this.setter = options.setter;
                this.outputFormatter = options.outputFormatter;
                this.inputFormatter = options.inputFormatter;
            };
            /**
             * Should be called to format input args of method
             *
             * @method formatInput
             * @param {Array}
             * @return {Array}
             */
            Property.prototype.formatInput = function (arg) {
                return this.inputFormatter ? this.inputFormatter(arg) : arg;
            };
            /**
             * Should be called to format output(result) of method
             *
             * @method formatOutput
             * @param {Object}
             * @return {Object}
             */
            Property.prototype.formatOutput = function (result) {
                return this.outputFormatter && result !== null ? this.outputFormatter(result) : result;
            };
            /**
             * Should be used to extract callback from array of arguments. Modifies input param
             *
             * @method extractCallback
             * @param {Array} arguments
             * @return {Function|Null} callback, if exists
             */
            Property.prototype.extractCallback = function (args) {
                if (utils.isFunction(args[args.length - 1])) {
                    return args.pop(); // modify the args array!
                }
            };
            /**
             * Should attach function to method
             *
             * @method attachToObject
             * @param {Object}
             * @param {Function}
             */
            Property.prototype.attachToObject = function (obj) {
                var proto = {
                    get: this.get.bind(this),
                };
                var names = this.name.split('.');
                var name = names[0];
                if (names.length > 1) {
                    obj[names[0]] = obj[names[0]] || {};
                    obj = obj[names[0]];
                    name = names[1];
                }
                Object.defineProperty(obj, name, proto);
                var toAsyncName = function (prefix, name) {
                    return prefix + name.charAt(0).toUpperCase() + name.slice(1);
                };
                var func = this.getAsync.bind(this);
                func.request = this.request.bind(this);
                obj[toAsyncName('get', name)] = func;
            };
            /**
             * Should be used to get value of the property
             *
             * @method get
             * @return {Object} value of the property
             */
            Property.prototype.get = function () {
                return this.formatOutput(RequestManager.getInstance().send({
                    method: this.getter
                }));
            };
            /**
             * Should be used to asynchrounously get value of property
             *
             * @method getAsync
             * @param {Function}
             */
            Property.prototype.getAsync = function (callback) {
                var self = this;
                RequestManager.getInstance().sendAsync({
                    method: this.getter
                }, function (err, result) {
                    if (err) {
                        return callback(err);
                    }
                    callback(err, self.formatOutput(result));
                });
            };
            /**
             * Should be called to create pure JSONRPC request which can be used in batch request
             *
             * @method request
             * @param {...} params
             * @return {Object} jsonrpc request
             */
            Property.prototype.request = function () {
                var payload = {
                    method: this.getter,
                    params: [],
                    callback: this.extractCallback(Array.prototype.slice.call(arguments))
                };
                payload.format = this.formatOutput.bind(this);
                return payload;
            };
            module.exports = Property;
        }, { "../utils/utils": 20, "./requestmanager": 43 }], 43: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file requestmanager.js
             * @author Jeffrey Wilcke <jeff@ethdev.com>
             * @author Marek Kotewicz <marek@ethdev.com>
             * @author Marian Oancea <marian@ethdev.com>
             * @author Fabian Vogelsteller <fabian@ethdev.com>
             * @author Gav Wood <g@ethdev.com>
             * @date 2014
             */
            var Jsonrpc = require('./jsonrpc');
            var utils = require('../utils/utils');
            var c = require('../utils/config');
            var errors = require('./errors');
            /**
             * It's responsible for passing messages to providers
             * It's also responsible for polling the ethereum node for incoming messages
             * Default poll timeout is 1 second
             * Singleton
             */
            var RequestManager = function (provider) {
                // singleton pattern
                if (arguments.callee._singletonInstance) {
                    return arguments.callee._singletonInstance;
                }
                arguments.callee._singletonInstance = this;
                this.provider = provider;
                this.polls = {};
                this.timeout = null;
                this.isPolling = false;
            };
            /**
             * @return {RequestManager} singleton
             */
            RequestManager.getInstance = function () {
                var instance = new RequestManager();
                return instance;
            };
            /**
             * Should be used to synchronously send request
             *
             * @method send
             * @param {Object} data
             * @return {Object}
             */
            RequestManager.prototype.send = function (data) {
                if (!this.provider) {
                    console.error(errors.InvalidProvider());
                    return null;
                }
                var payload = Jsonrpc.getInstance().toPayload(data.method, data.params);
                var result = this.provider.send(payload);
                if (!Jsonrpc.getInstance().isValidResponse(result)) {
                    throw errors.InvalidResponse(result);
                }
                return result.result;
            };
            /**
             * Should be used to asynchronously send request
             *
             * @method sendAsync
             * @param {Object} data
             * @param {Function} callback
             */
            RequestManager.prototype.sendAsync = function (data, callback) {
                if (!this.provider) {
                    return callback(errors.InvalidProvider());
                }
                var payload = Jsonrpc.getInstance().toPayload(data.method, data.params);
                this.provider.sendAsync(payload, function (err, result) {
                    if (err) {
                        return callback(err);
                    }
                    if (!Jsonrpc.getInstance().isValidResponse(result)) {
                        return callback(errors.InvalidResponse(result));
                    }
                    callback(null, result.result);
                });
            };
            /**
             * Should be called to asynchronously send batch request
             *
             * @method sendBatch
             * @param {Array} batch data
             * @param {Function} callback
             */
            RequestManager.prototype.sendBatch = function (data, callback) {
                if (!this.provider) {
                    return callback(errors.InvalidProvider());
                }
                var payload = Jsonrpc.getInstance().toBatchPayload(data);
                this.provider.sendAsync(payload, function (err, results) {
                    if (err) {
                        return callback(err);
                    }
                    if (!utils.isArray(results)) {
                        return callback(errors.InvalidResponse(results));
                    }
                    callback(err, results);
                });
            };
            /**
             * Should be used to set provider of request manager
             *
             * @method setProvider
             * @param {Object}
             */
            RequestManager.prototype.setProvider = function (p) {
                this.provider = p;
                if (this.provider && !this.isPolling) {
                    this.poll();
                    this.isPolling = true;
                }
            };
            /**
             * Should be used to start polling
             *
             * @method startPolling
             * @param {Object} data
             * @param {Number} pollId
             * @param {Function} callback
             * @param {Function} uninstall
             *
             * @todo cleanup number of params
             */
            RequestManager.prototype.startPolling = function (data, pollId, callback, uninstall) {
                this.polls[pollId] = { data: data, id: pollId, callback: callback, uninstall: uninstall };
            };
            /**
             * Should be used to stop polling for filter with given id
             *
             * @method stopPolling
             * @param {Number} pollId
             */
            RequestManager.prototype.stopPolling = function (pollId) {
                delete this.polls[pollId];
            };
            /**
             * Should be called to reset the polling mechanism of the request manager
             *
             * @method reset
             */
            RequestManager.prototype.reset = function (keepIsSyncing) {
                for (var key in this.polls) {
                    // remove all polls, except sync polls,
                    // they need to be removed manually by calling syncing.stopWatching()
                    if (!keepIsSyncing || key.indexOf('syncPoll_') === -1) {
                        this.polls[key].uninstall();
                        delete this.polls[key];
                    }
                }
                if (this.timeout) {
                    clearTimeout(this.timeout);
                    this.timeout = null;
                }
                this.poll();
            };
            /**
             * Should be called to poll for changes on filter with given id
             *
             * @method poll
             */
            RequestManager.prototype.poll = function () {
                /*jshint maxcomplexity: 6 */
                this.timeout = setTimeout(this.poll.bind(this), c.ETH_POLLING_TIMEOUT);
                if (Object.keys(this.polls).length === 0) {
                    return;
                }
                if (!this.provider) {
                    console.error(errors.InvalidProvider());
                    return;
                }
                var pollsData = [];
                var pollsIds = [];
                for (var key in this.polls) {
                    pollsData.push(this.polls[key].data);
                    pollsIds.push(key);
                }
                if (pollsData.length === 0) {
                    return;
                }
                var payload = Jsonrpc.getInstance().toBatchPayload(pollsData);
                // map the request id to they poll id
                var pollsIdMap = {};
                payload.forEach(function (load, index) {
                    pollsIdMap[load.id] = pollsIds[index];
                });
                var self = this;
                this.provider.sendAsync(payload, function (error, results) {
                    // TODO: console log?
                    if (error) {
                        return;
                    }
                    if (!utils.isArray(results)) {
                        throw errors.InvalidResponse(results);
                    }
                    results.map(function (result) {
                        var id = pollsIdMap[result.id];
                        // make sure the filter is still installed after arrival of the request
                        if (self.polls[id]) {
                            result.callback = self.polls[id].callback;
                            return result;
                        }
                        else
                            return false;
                    }).filter(function (result) {
                        return !!result;
                    }).filter(function (result) {
                        var valid = Jsonrpc.getInstance().isValidResponse(result);
                        if (!valid) {
                            result.callback(errors.InvalidResponse(result));
                        }
                        return valid;
                    }).forEach(function (result) {
                        result.callback(null, result.result);
                    });
                });
            };
            module.exports = RequestManager;
        }, { "../utils/config": 18, "../utils/utils": 20, "./errors": 26, "./jsonrpc": 34 }], 44: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /** @file syncing.js
             * @authors:
             *   Fabian Vogelsteller <fabian@ethdev.com>
             * @date 2015
             */
            var RequestManager = require('./requestmanager');
            var Method = require('./method');
            var formatters = require('./formatters');
            var utils = require('../utils/utils');
            /**
            Adds the callback and sets up the methods, to iterate over the results.
            
            @method pollSyncing
            @param {Object} self
            */
            var pollSyncing = function (self) {
                var lastSyncState = false;
                var onMessage = function (error, sync) {
                    if (error) {
                        return self.callbacks.forEach(function (callback) {
                            callback(error);
                        });
                    }
                    if (utils.isObject(sync))
                        sync = self.implementation.outputFormatter(sync);
                    self.callbacks.forEach(function (callback) {
                        if (lastSyncState !== sync) {
                            // call the callback with true first so the app can stop anything, before receiving the sync data
                            if (!lastSyncState && utils.isObject(sync))
                                callback(null, true);
                            // call on the next CPU cycle, so the actions of the sync stop can be processes first
                            setTimeout(function () {
                                callback(null, sync);
                            }, 1);
                            lastSyncState = sync;
                        }
                    });
                };
                RequestManager.getInstance().startPolling({
                    method: self.implementation.call,
                    params: [],
                }, self.pollId, onMessage, self.stopWatching.bind(self));
            };
            var IsSyncing = function (callback) {
                this.pollId = 'syncPoll_' + Math.floor(Math.random() * 1000);
                this.callbacks = [];
                this.implementation = new Method({
                    name: 'isSyncing',
                    call: 'eth_syncing',
                    params: 0,
                    outputFormatter: formatters.outputSyncingFormatter
                });
                this.addCallback(callback);
                pollSyncing(this);
                return this;
            };
            IsSyncing.prototype.addCallback = function (callback) {
                if (callback)
                    this.callbacks.push(callback);
                return this;
            };
            IsSyncing.prototype.stopWatching = function () {
                RequestManager.getInstance().stopPolling(this.pollId);
                this.callbacks = [];
            };
            module.exports = IsSyncing;
        }, { "../utils/utils": 20, "./formatters": 29, "./method": 35, "./requestmanager": 43 }], 45: [function (require, module, exports) {
            /*
                This file is part of ethereum.js.
            
                ethereum.js is free software: you can redistribute it and/or modify
                it under the terms of the GNU Lesser General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                ethereum.js is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Lesser General Public License for more details.
            
                You should have received a copy of the GNU Lesser General Public License
                along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
            */
            /**
             * @file transfer.js
             * @author Marek Kotewicz <marek@ethdev.com>
             * @date 2015
             */
            var web3 = require('../web3');
            var Iban = require('./iban');
            var namereg = require('./namereg').ibanNamereg;
            var contract = require('./contract');
            var exchangeAbi = require('../contracts/SmartExchange.json');
            /**
             * Should be used to make Iban transfer
             *
             * @method transfer
             * @param {String} from
             * @param {String} to iban
             * @param {Value} value to be tranfered
             * @param {Function} callback, callback
             */
            var transfer = function (from, to, value, callback) {
                var iban = new Iban(to);
                if (!iban.isValid()) {
                    throw new Error('invalid iban address');
                }
                if (iban.isDirect()) {
                    return transferToAddress(from, iban.address(), value, callback);
                }
                if (!callback) {
                    var address = namereg.addr(iban.institution());
                    return deposit(from, address, value, iban.client());
                }
                namereg.addr(iban.institution(), function (err, address) {
                    return deposit(from, address, value, iban.client(), callback);
                });
            };
            /**
             * Should be used to transfer funds to certain address
             *
             * @method transferToAddress
             * @param {String} from
             * @param {String} to
             * @param {Value} value to be tranfered
             * @param {Function} callback, callback
             */
            var transferToAddress = function (from, to, value, callback) {
                return web3.eth.sendTransaction({
                    address: to,
                    from: from,
                    value: value
                }, callback);
            };
            /**
             * Should be used to deposit funds to generic Exchange contract (must implement deposit(bytes32) method!)
             *
             * @method deposit
             * @param {String} from
             * @param {String} to
             * @param {Value} value to be transfered
             * @param {String} client unique identifier
             * @param {Function} callback, callback
             */
            var deposit = function (from, to, value, client, callback) {
                var abi = exchangeAbi;
                return contract(abi).at(to).deposit(client, {
                    from: from,
                    value: value
                }, callback);
            };
            module.exports = transfer;
        }, { "../contracts/SmartExchange.json": 3, "../web3": 22, "./contract": 25, "./iban": 32, "./namereg": 41 }], 46: [function (require, module, exports) {
        }, {}], 47: [function (require, module, exports) {
            ;
            (function (root, factory) {
                if (typeof exports === "object") {
                    // CommonJS
                    module.exports = exports = factory();
                }
                else if (typeof define === "function" && define.amd) {
                    // AMD
                    define([], factory);
                }
                else {
                    // Global (browser)
                    root.CryptoJS = factory();
                }
            }(this, function () {
                /**
                 * CryptoJS core components.
                 */
                var CryptoJS = CryptoJS || (function (Math, undefined) {
                    /**
                     * CryptoJS namespace.
                     */
                    var C = {};
                    /**
                     * Library namespace.
                     */
                    var C_lib = C.lib = {};
                    /**
                     * Base object for prototypal inheritance.
                     */
                    var Base = C_lib.Base = (function () {
                        function F() { }
                        return {
                            /**
                             * Creates a new object that inherits from this object.
                             *
                             * @param {Object} overrides Properties to copy into the new object.
                             *
                             * @return {Object} The new object.
                             *
                             * @static
                             *
                             * @example
                             *
                             *     var MyType = CryptoJS.lib.Base.extend({
                             *         field: 'value',
                             *
                             *         method: function () {
                             *         }
                             *     });
                             */
                            extend: function (overrides) {
                                // Spawn
                                F.prototype = this;
                                var subtype = new F();
                                // Augment
                                if (overrides) {
                                    subtype.mixIn(overrides);
                                }
                                // Create default initializer
                                if (!subtype.hasOwnProperty('init')) {
                                    subtype.init = function () {
                                        subtype.$super.init.apply(this, arguments);
                                    };
                                }
                                // Initializer's prototype is the subtype object
                                subtype.init.prototype = subtype;
                                // Reference supertype
                                subtype.$super = this;
                                return subtype;
                            },
                            /**
                             * Extends this object and runs the init method.
                             * Arguments to create() will be passed to init().
                             *
                             * @return {Object} The new object.
                             *
                             * @static
                             *
                             * @example
                             *
                             *     var instance = MyType.create();
                             */
                            create: function () {
                                var instance = this.extend();
                                instance.init.apply(instance, arguments);
                                return instance;
                            },
                            /**
                             * Initializes a newly created object.
                             * Override this method to add some logic when your objects are created.
                             *
                             * @example
                             *
                             *     var MyType = CryptoJS.lib.Base.extend({
                             *         init: function () {
                             *             // ...
                             *         }
                             *     });
                             */
                            init: function () {
                            },
                            /**
                             * Copies properties into this object.
                             *
                             * @param {Object} properties The properties to mix in.
                             *
                             * @example
                             *
                             *     MyType.mixIn({
                             *         field: 'value'
                             *     });
                             */
                            mixIn: function (properties) {
                                for (var propertyName in properties) {
                                    if (properties.hasOwnProperty(propertyName)) {
                                        this[propertyName] = properties[propertyName];
                                    }
                                }
                                // IE won't copy toString using the loop above
                                if (properties.hasOwnProperty('toString')) {
                                    this.toString = properties.toString;
                                }
                            },
                            /**
                             * Creates a copy of this object.
                             *
                             * @return {Object} The clone.
                             *
                             * @example
                             *
                             *     var clone = instance.clone();
                             */
                            clone: function () {
                                return this.init.prototype.extend(this);
                            }
                        };
                    }());
                    /**
                     * An array of 32-bit words.
                     *
                     * @property {Array} words The array of 32-bit words.
                     * @property {number} sigBytes The number of significant bytes in this word array.
                     */
                    var WordArray = C_lib.WordArray = Base.extend({
                        /**
                         * Initializes a newly created word array.
                         *
                         * @param {Array} words (Optional) An array of 32-bit words.
                         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
                         *
                         * @example
                         *
                         *     var wordArray = CryptoJS.lib.WordArray.create();
                         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
                         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
                         */
                        init: function (words, sigBytes) {
                            words = this.words = words || [];
                            if (sigBytes != undefined) {
                                this.sigBytes = sigBytes;
                            }
                            else {
                                this.sigBytes = words.length * 4;
                            }
                        },
                        /**
                         * Converts this word array to a string.
                         *
                         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
                         *
                         * @return {string} The stringified word array.
                         *
                         * @example
                         *
                         *     var string = wordArray + '';
                         *     var string = wordArray.toString();
                         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
                         */
                        toString: function (encoder) {
                            return (encoder || Hex).stringify(this);
                        },
                        /**
                         * Concatenates a word array to this word array.
                         *
                         * @param {WordArray} wordArray The word array to append.
                         *
                         * @return {WordArray} This word array.
                         *
                         * @example
                         *
                         *     wordArray1.concat(wordArray2);
                         */
                        concat: function (wordArray) {
                            // Shortcuts
                            var thisWords = this.words;
                            var thatWords = wordArray.words;
                            var thisSigBytes = this.sigBytes;
                            var thatSigBytes = wordArray.sigBytes;
                            // Clamp excess bits
                            this.clamp();
                            // Concat
                            if (thisSigBytes % 4) {
                                // Copy one byte at a time
                                for (var i = 0; i < thatSigBytes; i++) {
                                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
                                }
                            }
                            else {
                                // Copy one word at a time
                                for (var i = 0; i < thatSigBytes; i += 4) {
                                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
                                }
                            }
                            this.sigBytes += thatSigBytes;
                            // Chainable
                            return this;
                        },
                        /**
                         * Removes insignificant bits.
                         *
                         * @example
                         *
                         *     wordArray.clamp();
                         */
                        clamp: function () {
                            // Shortcuts
                            var words = this.words;
                            var sigBytes = this.sigBytes;
                            // Clamp
                            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
                            words.length = Math.ceil(sigBytes / 4);
                        },
                        /**
                         * Creates a copy of this word array.
                         *
                         * @return {WordArray} The clone.
                         *
                         * @example
                         *
                         *     var clone = wordArray.clone();
                         */
                        clone: function () {
                            var clone = Base.clone.call(this);
                            clone.words = this.words.slice(0);
                            return clone;
                        },
                        /**
                         * Creates a word array filled with random bytes.
                         *
                         * @param {number} nBytes The number of random bytes to generate.
                         *
                         * @return {WordArray} The random word array.
                         *
                         * @static
                         *
                         * @example
                         *
                         *     var wordArray = CryptoJS.lib.WordArray.random(16);
                         */
                        random: function (nBytes) {
                            var words = [];
                            var r = (function (m_w) {
                                var m_w = m_w;
                                var m_z = 0x3ade68b1;
                                var mask = 0xffffffff;
                                return function () {
                                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
                                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
                                    var result = ((m_z << 0x10) + m_w) & mask;
                                    result /= 0x100000000;
                                    result += 0.5;
                                    return result * (Math.random() > .5 ? 1 : -1);
                                };
                            });
                            for (var i = 0, rcache; i < nBytes; i += 4) {
                                var _r = r((rcache || Math.random()) * 0x100000000);
                                rcache = _r() * 0x3ade67b7;
                                words.push((_r() * 0x100000000) | 0);
                            }
                            return new WordArray.init(words, nBytes);
                        }
                    });
                    /**
                     * Encoder namespace.
                     */
                    var C_enc = C.enc = {};
                    /**
                     * Hex encoding strategy.
                     */
                    var Hex = C_enc.Hex = {
                        /**
                         * Converts a word array to a hex string.
                         *
                         * @param {WordArray} wordArray The word array.
                         *
                         * @return {string} The hex string.
                         *
                         * @static
                         *
                         * @example
                         *
                         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
                         */
                        stringify: function (wordArray) {
                            // Shortcuts
                            var words = wordArray.words;
                            var sigBytes = wordArray.sigBytes;
                            // Convert
                            var hexChars = [];
                            for (var i = 0; i < sigBytes; i++) {
                                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                                hexChars.push((bite >>> 4).toString(16));
                                hexChars.push((bite & 0x0f).toString(16));
                            }
                            return hexChars.join('');
                        },
                        /**
                         * Converts a hex string to a word array.
                         *
                         * @param {string} hexStr The hex string.
                         *
                         * @return {WordArray} The word array.
                         *
                         * @static
                         *
                         * @example
                         *
                         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
                         */
                        parse: function (hexStr) {
                            // Shortcut
                            var hexStrLength = hexStr.length;
                            // Convert
                            var words = [];
                            for (var i = 0; i < hexStrLength; i += 2) {
                                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
                            }
                            return new WordArray.init(words, hexStrLength / 2);
                        }
                    };
                    /**
                     * Latin1 encoding strategy.
                     */
                    var Latin1 = C_enc.Latin1 = {
                        /**
                         * Converts a word array to a Latin1 string.
                         *
                         * @param {WordArray} wordArray The word array.
                         *
                         * @return {string} The Latin1 string.
                         *
                         * @static
                         *
                         * @example
                         *
                         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
                         */
                        stringify: function (wordArray) {
                            // Shortcuts
                            var words = wordArray.words;
                            var sigBytes = wordArray.sigBytes;
                            // Convert
                            var latin1Chars = [];
                            for (var i = 0; i < sigBytes; i++) {
                                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                                latin1Chars.push(String.fromCharCode(bite));
                            }
                            return latin1Chars.join('');
                        },
                        /**
                         * Converts a Latin1 string to a word array.
                         *
                         * @param {string} latin1Str The Latin1 string.
                         *
                         * @return {WordArray} The word array.
                         *
                         * @static
                         *
                         * @example
                         *
                         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
                         */
                        parse: function (latin1Str) {
                            // Shortcut
                            var latin1StrLength = latin1Str.length;
                            // Convert
                            var words = [];
                            for (var i = 0; i < latin1StrLength; i++) {
                                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
                            }
                            return new WordArray.init(words, latin1StrLength);
                        }
                    };
                    /**
                     * UTF-8 encoding strategy.
                     */
                    var Utf8 = C_enc.Utf8 = {
                        /**
                         * Converts a word array to a UTF-8 string.
                         *
                         * @param {WordArray} wordArray The word array.
                         *
                         * @return {string} The UTF-8 string.
                         *
                         * @static
                         *
                         * @example
                         *
                         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
                         */
                        stringify: function (wordArray) {
                            try {
                                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
                            }
                            catch (e) {
                                throw new Error('Malformed UTF-8 data');
                            }
                        },
                        /**
                         * Converts a UTF-8 string to a word array.
                         *
                         * @param {string} utf8Str The UTF-8 string.
                         *
                         * @return {WordArray} The word array.
                         *
                         * @static
                         *
                         * @example
                         *
                         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
                         */
                        parse: function (utf8Str) {
                            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
                        }
                    };
                    /**
                     * Abstract buffered block algorithm template.
                     *
                     * The property blockSize must be implemented in a concrete subtype.
                     *
                     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
                     */
                    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
                        /**
                         * Resets this block algorithm's data buffer to its initial state.
                         *
                         * @example
                         *
                         *     bufferedBlockAlgorithm.reset();
                         */
                        reset: function () {
                            // Initial values
                            this._data = new WordArray.init();
                            this._nDataBytes = 0;
                        },
                        /**
                         * Adds new data to this block algorithm's buffer.
                         *
                         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
                         *
                         * @example
                         *
                         *     bufferedBlockAlgorithm._append('data');
                         *     bufferedBlockAlgorithm._append(wordArray);
                         */
                        _append: function (data) {
                            // Convert string to WordArray, else assume WordArray already
                            if (typeof data == 'string') {
                                data = Utf8.parse(data);
                            }
                            // Append
                            this._data.concat(data);
                            this._nDataBytes += data.sigBytes;
                        },
                        /**
                         * Processes available data blocks.
                         *
                         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
                         *
                         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
                         *
                         * @return {WordArray} The processed data.
                         *
                         * @example
                         *
                         *     var processedData = bufferedBlockAlgorithm._process();
                         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
                         */
                        _process: function (doFlush) {
                            // Shortcuts
                            var data = this._data;
                            var dataWords = data.words;
                            var dataSigBytes = data.sigBytes;
                            var blockSize = this.blockSize;
                            var blockSizeBytes = blockSize * 4;
                            // Count blocks ready
                            var nBlocksReady = dataSigBytes / blockSizeBytes;
                            if (doFlush) {
                                // Round up to include partial blocks
                                nBlocksReady = Math.ceil(nBlocksReady);
                            }
                            else {
                                // Round down to include only full blocks,
                                // less the number of blocks that must remain in the buffer
                                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
                            }
                            // Count words ready
                            var nWordsReady = nBlocksReady * blockSize;
                            // Count bytes ready
                            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
                            // Process blocks
                            if (nWordsReady) {
                                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                                    // Perform concrete-algorithm logic
                                    this._doProcessBlock(dataWords, offset);
                                }
                                // Remove processed words
                                var processedWords = dataWords.splice(0, nWordsReady);
                                data.sigBytes -= nBytesReady;
                            }
                            // Return processed words
                            return new WordArray.init(processedWords, nBytesReady);
                        },
                        /**
                         * Creates a copy of this object.
                         *
                         * @return {Object} The clone.
                         *
                         * @example
                         *
                         *     var clone = bufferedBlockAlgorithm.clone();
                         */
                        clone: function () {
                            var clone = Base.clone.call(this);
                            clone._data = this._data.clone();
                            return clone;
                        },
                        _minBufferSize: 0
                    });
                    /**
                     * Abstract hasher template.
                     *
                     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
                     */
                    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
                        /**
                         * Configuration options.
                         */
                        cfg: Base.extend(),
                        /**
                         * Initializes a newly created hasher.
                         *
                         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
                         *
                         * @example
                         *
                         *     var hasher = CryptoJS.algo.SHA256.create();
                         */
                        init: function (cfg) {
                            // Apply config defaults
                            this.cfg = this.cfg.extend(cfg);
                            // Set initial values
                            this.reset();
                        },
                        /**
                         * Resets this hasher to its initial state.
                         *
                         * @example
                         *
                         *     hasher.reset();
                         */
                        reset: function () {
                            // Reset data buffer
                            BufferedBlockAlgorithm.reset.call(this);
                            // Perform concrete-hasher logic
                            this._doReset();
                        },
                        /**
                         * Updates this hasher with a message.
                         *
                         * @param {WordArray|string} messageUpdate The message to append.
                         *
                         * @return {Hasher} This hasher.
                         *
                         * @example
                         *
                         *     hasher.update('message');
                         *     hasher.update(wordArray);
                         */
                        update: function (messageUpdate) {
                            // Append
                            this._append(messageUpdate);
                            // Update the hash
                            this._process();
                            // Chainable
                            return this;
                        },
                        /**
                         * Finalizes the hash computation.
                         * Note that the finalize operation is effectively a destructive, read-once operation.
                         *
                         * @param {WordArray|string} messageUpdate (Optional) A final message update.
                         *
                         * @return {WordArray} The hash.
                         *
                         * @example
                         *
                         *     var hash = hasher.finalize();
                         *     var hash = hasher.finalize('message');
                         *     var hash = hasher.finalize(wordArray);
                         */
                        finalize: function (messageUpdate) {
                            // Final message update
                            if (messageUpdate) {
                                this._append(messageUpdate);
                            }
                            // Perform concrete-hasher logic
                            var hash = this._doFinalize();
                            return hash;
                        },
                        blockSize: 512 / 32,
                        /**
                         * Creates a shortcut function to a hasher's object interface.
                         *
                         * @param {Hasher} hasher The hasher to create a helper for.
                         *
                         * @return {Function} The shortcut function.
                         *
                         * @static
                         *
                         * @example
                         *
                         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
                         */
                        _createHelper: function (hasher) {
                            return function (message, cfg) {
                                return new hasher.init(cfg).finalize(message);
                            };
                        },
                        /**
                         * Creates a shortcut function to the HMAC's object interface.
                         *
                         * @param {Hasher} hasher The hasher to use in this HMAC helper.
                         *
                         * @return {Function} The shortcut function.
                         *
                         * @static
                         *
                         * @example
                         *
                         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
                         */
                        _createHmacHelper: function (hasher) {
                            return function (message, key) {
                                return new C_algo.HMAC.init(hasher, key).finalize(message);
                            };
                        }
                    });
                    /**
                     * Algorithm namespace.
                     */
                    var C_algo = C.algo = {};
                    return C;
                }(Math));
                return CryptoJS;
            }));
        }, {}], 48: [function (require, module, exports) {
            ;
            (function (root, factory, undef) {
                if (typeof exports === "object") {
                    // CommonJS
                    module.exports = exports = factory(require("./core"), require("./x64-core"));
                }
                else if (typeof define === "function" && define.amd) {
                    // AMD
                    define(["./core", "./x64-core"], factory);
                }
                else {
                    // Global (browser)
                    factory(root.CryptoJS);
                }
            }(this, function (CryptoJS) {
                (function (Math) {
                    // Shortcuts
                    var C = CryptoJS;
                    var C_lib = C.lib;
                    var WordArray = C_lib.WordArray;
                    var Hasher = C_lib.Hasher;
                    var C_x64 = C.x64;
                    var X64Word = C_x64.Word;
                    var C_algo = C.algo;
                    // Constants tables
                    var RHO_OFFSETS = [];
                    var PI_INDEXES = [];
                    var ROUND_CONSTANTS = [];
                    // Compute Constants
                    (function () {
                        // Compute rho offset constants
                        var x = 1, y = 0;
                        for (var t = 0; t < 24; t++) {
                            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;
                            var newX = y % 5;
                            var newY = (2 * x + 3 * y) % 5;
                            x = newX;
                            y = newY;
                        }
                        // Compute pi index constants
                        for (var x = 0; x < 5; x++) {
                            for (var y = 0; y < 5; y++) {
                                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
                            }
                        }
                        // Compute round constants
                        var LFSR = 0x01;
                        for (var i = 0; i < 24; i++) {
                            var roundConstantMsw = 0;
                            var roundConstantLsw = 0;
                            for (var j = 0; j < 7; j++) {
                                if (LFSR & 0x01) {
                                    var bitPosition = (1 << j) - 1;
                                    if (bitPosition < 32) {
                                        roundConstantLsw ^= 1 << bitPosition;
                                    }
                                    else {
                                        roundConstantMsw ^= 1 << (bitPosition - 32);
                                    }
                                }
                                // Compute next LFSR
                                if (LFSR & 0x80) {
                                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
                                    LFSR = (LFSR << 1) ^ 0x71;
                                }
                                else {
                                    LFSR <<= 1;
                                }
                            }
                            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
                        }
                    }());
                    // Reusable objects for temporary values
                    var T = [];
                    (function () {
                        for (var i = 0; i < 25; i++) {
                            T[i] = X64Word.create();
                        }
                    }());
                    /**
                     * SHA-3 hash algorithm.
                     */
                    var SHA3 = C_algo.SHA3 = Hasher.extend({
                        /**
                         * Configuration options.
                         *
                         * @property {number} outputLength
                         *   The desired number of bits in the output hash.
                         *   Only values permitted are: 224, 256, 384, 512.
                         *   Default: 512
                         */
                        cfg: Hasher.cfg.extend({
                            outputLength: 512
                        }),
                        _doReset: function () {
                            var state = this._state = [];
                            for (var i = 0; i < 25; i++) {
                                state[i] = new X64Word.init();
                            }
                            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                        },
                        _doProcessBlock: function (M, offset) {
                            // Shortcuts
                            var state = this._state;
                            var nBlockSizeLanes = this.blockSize / 2;
                            // Absorb
                            for (var i = 0; i < nBlockSizeLanes; i++) {
                                // Shortcuts
                                var M2i = M[offset + 2 * i];
                                var M2i1 = M[offset + 2 * i + 1];
                                // Swap endian
                                M2i = ((((M2i << 8) | (M2i >>> 24)) & 0x00ff00ff) |
                                    (((M2i << 24) | (M2i >>> 8)) & 0xff00ff00));
                                M2i1 = ((((M2i1 << 8) | (M2i1 >>> 24)) & 0x00ff00ff) |
                                    (((M2i1 << 24) | (M2i1 >>> 8)) & 0xff00ff00));
                                // Absorb message into state
                                var lane = state[i];
                                lane.high ^= M2i1;
                                lane.low ^= M2i;
                            }
                            // Rounds
                            for (var round = 0; round < 24; round++) {
                                // Theta
                                for (var x = 0; x < 5; x++) {
                                    // Mix column lanes
                                    var tMsw = 0, tLsw = 0;
                                    for (var y = 0; y < 5; y++) {
                                        var lane = state[x + 5 * y];
                                        tMsw ^= lane.high;
                                        tLsw ^= lane.low;
                                    }
                                    // Temporary values
                                    var Tx = T[x];
                                    Tx.high = tMsw;
                                    Tx.low = tLsw;
                                }
                                for (var x = 0; x < 5; x++) {
                                    // Shortcuts
                                    var Tx4 = T[(x + 4) % 5];
                                    var Tx1 = T[(x + 1) % 5];
                                    var Tx1Msw = Tx1.high;
                                    var Tx1Lsw = Tx1.low;
                                    // Mix surrounding columns
                                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
                                    var tLsw = Tx4.low ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
                                    for (var y = 0; y < 5; y++) {
                                        var lane = state[x + 5 * y];
                                        lane.high ^= tMsw;
                                        lane.low ^= tLsw;
                                    }
                                }
                                // Rho Pi
                                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                                    // Shortcuts
                                    var lane = state[laneIndex];
                                    var laneMsw = lane.high;
                                    var laneLsw = lane.low;
                                    var rhoOffset = RHO_OFFSETS[laneIndex];
                                    // Rotate lanes
                                    if (rhoOffset < 32) {
                                        var tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
                                        var tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
                                    }
                                    else {
                                        var tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
                                        var tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
                                    }
                                    // Transpose lanes
                                    var TPiLane = T[PI_INDEXES[laneIndex]];
                                    TPiLane.high = tMsw;
                                    TPiLane.low = tLsw;
                                }
                                // Rho pi at x = y = 0
                                var T0 = T[0];
                                var state0 = state[0];
                                T0.high = state0.high;
                                T0.low = state0.low;
                                // Chi
                                for (var x = 0; x < 5; x++) {
                                    for (var y = 0; y < 5; y++) {
                                        // Shortcuts
                                        var laneIndex = x + 5 * y;
                                        var lane = state[laneIndex];
                                        var TLane = T[laneIndex];
                                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
                                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];
                                        // Mix rows
                                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
                                        lane.low = TLane.low ^ (~Tx1Lane.low & Tx2Lane.low);
                                    }
                                }
                                // Iota
                                var lane = state[0];
                                var roundConstant = ROUND_CONSTANTS[round];
                                lane.high ^= roundConstant.high;
                                lane.low ^= roundConstant.low;
                                ;
                            }
                        },
                        _doFinalize: function () {
                            // Shortcuts
                            var data = this._data;
                            var dataWords = data.words;
                            var nBitsTotal = this._nDataBytes * 8;
                            var nBitsLeft = data.sigBytes * 8;
                            var blockSizeBits = this.blockSize * 32;
                            // Add padding
                            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
                            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
                            data.sigBytes = dataWords.length * 4;
                            // Hash final blocks
                            this._process();
                            // Shortcuts
                            var state = this._state;
                            var outputLengthBytes = this.cfg.outputLength / 8;
                            var outputLengthLanes = outputLengthBytes / 8;
                            // Squeeze
                            var hashWords = [];
                            for (var i = 0; i < outputLengthLanes; i++) {
                                // Shortcuts
                                var lane = state[i];
                                var laneMsw = lane.high;
                                var laneLsw = lane.low;
                                // Swap endian
                                laneMsw = ((((laneMsw << 8) | (laneMsw >>> 24)) & 0x00ff00ff) |
                                    (((laneMsw << 24) | (laneMsw >>> 8)) & 0xff00ff00));
                                laneLsw = ((((laneLsw << 8) | (laneLsw >>> 24)) & 0x00ff00ff) |
                                    (((laneLsw << 24) | (laneLsw >>> 8)) & 0xff00ff00));
                                // Squeeze state to retrieve hash
                                hashWords.push(laneLsw);
                                hashWords.push(laneMsw);
                            }
                            // Return final computed hash
                            return new WordArray.init(hashWords, outputLengthBytes);
                        },
                        clone: function () {
                            var clone = Hasher.clone.call(this);
                            var state = clone._state = this._state.slice(0);
                            for (var i = 0; i < 25; i++) {
                                state[i] = state[i].clone();
                            }
                            return clone;
                        }
                    });
                    /**
                     * Shortcut function to the hasher's object interface.
                     *
                     * @param {WordArray|string} message The message to hash.
                     *
                     * @return {WordArray} The hash.
                     *
                     * @static
                     *
                     * @example
                     *
                     *     var hash = CryptoJS.SHA3('message');
                     *     var hash = CryptoJS.SHA3(wordArray);
                     */
                    C.SHA3 = Hasher._createHelper(SHA3);
                    /**
                     * Shortcut function to the HMAC's object interface.
                     *
                     * @param {WordArray|string} message The message to hash.
                     * @param {WordArray|string} key The secret key.
                     *
                     * @return {WordArray} The HMAC.
                     *
                     * @static
                     *
                     * @example
                     *
                     *     var hmac = CryptoJS.HmacSHA3(message, key);
                     */
                    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
                }(Math));
                return CryptoJS.SHA3;
            }));
        }, { "./core": 47, "./x64-core": 49 }], 49: [function (require, module, exports) {
            ;
            (function (root, factory) {
                if (typeof exports === "object") {
                    // CommonJS
                    module.exports = exports = factory(require("./core"));
                }
                else if (typeof define === "function" && define.amd) {
                    // AMD
                    define(["./core"], factory);
                }
                else {
                    // Global (browser)
                    factory(root.CryptoJS);
                }
            }(this, function (CryptoJS) {
                (function (undefined) {
                    // Shortcuts
                    var C = CryptoJS;
                    var C_lib = C.lib;
                    var Base = C_lib.Base;
                    var X32WordArray = C_lib.WordArray;
                    /**
                     * x64 namespace.
                     */
                    var C_x64 = C.x64 = {};
                    /**
                     * A 64-bit word.
                     */
                    var X64Word = C_x64.Word = Base.extend({
                        /**
                         * Initializes a newly created 64-bit word.
                         *
                         * @param {number} high The high 32 bits.
                         * @param {number} low The low 32 bits.
                         *
                         * @example
                         *
                         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
                         */
                        init: function (high, low) {
                            this.high = high;
                            this.low = low;
                        }
                    });
                    /**
                     * An array of 64-bit words.
                     *
                     * @property {Array} words The array of CryptoJS.x64.Word objects.
                     * @property {number} sigBytes The number of significant bytes in this word array.
                     */
                    var X64WordArray = C_x64.WordArray = Base.extend({
                        /**
                         * Initializes a newly created word array.
                         *
                         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
                         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
                         *
                         * @example
                         *
                         *     var wordArray = CryptoJS.x64.WordArray.create();
                         *
                         *     var wordArray = CryptoJS.x64.WordArray.create([
                         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
                         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
                         *     ]);
                         *
                         *     var wordArray = CryptoJS.x64.WordArray.create([
                         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
                         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
                         *     ], 10);
                         */
                        init: function (words, sigBytes) {
                            words = this.words = words || [];
                            if (sigBytes != undefined) {
                                this.sigBytes = sigBytes;
                            }
                            else {
                                this.sigBytes = words.length * 8;
                            }
                        },
                        /**
                         * Converts this 64-bit word array to a 32-bit word array.
                         *
                         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
                         *
                         * @example
                         *
                         *     var x32WordArray = x64WordArray.toX32();
                         */
                        toX32: function () {
                            // Shortcuts
                            var x64Words = this.words;
                            var x64WordsLength = x64Words.length;
                            // Convert
                            var x32Words = [];
                            for (var i = 0; i < x64WordsLength; i++) {
                                var x64Word = x64Words[i];
                                x32Words.push(x64Word.high);
                                x32Words.push(x64Word.low);
                            }
                            return X32WordArray.create(x32Words, this.sigBytes);
                        },
                        /**
                         * Creates a copy of this word array.
                         *
                         * @return {X64WordArray} The clone.
                         *
                         * @example
                         *
                         *     var clone = x64WordArray.clone();
                         */
                        clone: function () {
                            var clone = Base.clone.call(this);
                            // Clone "words" array
                            var words = clone.words = this.words.slice(0);
                            // Clone each X64Word object
                            var wordsLength = words.length;
                            for (var i = 0; i < wordsLength; i++) {
                                words[i] = words[i].clone();
                            }
                            return clone;
                        }
                    });
                }());
                return CryptoJS;
            }));
        }, { "./core": 47 }], 50: [function (require, module, exports) {
            /*! https://mths.be/utf8js v2.0.0 by @mathias */
            ;
            (function (root) {
                // Detect free variables `exports`
                var freeExports = typeof exports == 'object' && exports;
                // Detect free variable `module`
                var freeModule = typeof module == 'object' && module &&
                    module.exports == freeExports && module;
                // Detect free variable `global`, from Node.js or Browserified code,
                // and use it as `root`
                var freeGlobal = typeof global == 'object' && global;
                if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
                    root = freeGlobal;
                }
                /*--------------------------------------------------------------------------*/
                var stringFromCharCode = String.fromCharCode;
                // Taken from https://mths.be/punycode
                function ucs2decode(string) {
                    var output = [];
                    var counter = 0;
                    var length = string.length;
                    var value;
                    var extra;
                    while (counter < length) {
                        value = string.charCodeAt(counter++);
                        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                            // high surrogate, and there is a next character
                            extra = string.charCodeAt(counter++);
                            if ((extra & 0xFC00) == 0xDC00) {
                                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                            }
                            else {
                                // unmatched surrogate; only append this code unit, in case the next
                                // code unit is the high surrogate of a surrogate pair
                                output.push(value);
                                counter--;
                            }
                        }
                        else {
                            output.push(value);
                        }
                    }
                    return output;
                }
                // Taken from https://mths.be/punycode
                function ucs2encode(array) {
                    var length = array.length;
                    var index = -1;
                    var value;
                    var output = '';
                    while (++index < length) {
                        value = array[index];
                        if (value > 0xFFFF) {
                            value -= 0x10000;
                            output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                            value = 0xDC00 | value & 0x3FF;
                        }
                        output += stringFromCharCode(value);
                    }
                    return output;
                }
                function checkScalarValue(codePoint) {
                    if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
                        throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
                            ' is not a scalar value');
                    }
                }
                /*--------------------------------------------------------------------------*/
                function createByte(codePoint, shift) {
                    return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
                }
                function encodeCodePoint(codePoint) {
                    if ((codePoint & 0xFFFFFF80) == 0) {
                        return stringFromCharCode(codePoint);
                    }
                    var symbol = '';
                    if ((codePoint & 0xFFFFF800) == 0) {
                        symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
                    }
                    else if ((codePoint & 0xFFFF0000) == 0) {
                        checkScalarValue(codePoint);
                        symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
                        symbol += createByte(codePoint, 6);
                    }
                    else if ((codePoint & 0xFFE00000) == 0) {
                        symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
                        symbol += createByte(codePoint, 12);
                        symbol += createByte(codePoint, 6);
                    }
                    symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
                    return symbol;
                }
                function utf8encode(string) {
                    var codePoints = ucs2decode(string);
                    var length = codePoints.length;
                    var index = -1;
                    var codePoint;
                    var byteString = '';
                    while (++index < length) {
                        codePoint = codePoints[index];
                        byteString += encodeCodePoint(codePoint);
                    }
                    return byteString;
                }
                /*--------------------------------------------------------------------------*/
                function readContinuationByte() {
                    if (byteIndex >= byteCount) {
                        throw Error('Invalid byte index');
                    }
                    var continuationByte = byteArray[byteIndex] & 0xFF;
                    byteIndex++;
                    if ((continuationByte & 0xC0) == 0x80) {
                        return continuationByte & 0x3F;
                    }
                    // If we end up here, it’s not a continuation byte
                    throw Error('Invalid continuation byte');
                }
                function decodeSymbol() {
                    var byte1;
                    var byte2;
                    var byte3;
                    var byte4;
                    var codePoint;
                    if (byteIndex > byteCount) {
                        throw Error('Invalid byte index');
                    }
                    if (byteIndex == byteCount) {
                        return false;
                    }
                    // Read first byte
                    byte1 = byteArray[byteIndex] & 0xFF;
                    byteIndex++;
                    // 1-byte sequence (no continuation bytes)
                    if ((byte1 & 0x80) == 0) {
                        return byte1;
                    }
                    // 2-byte sequence
                    if ((byte1 & 0xE0) == 0xC0) {
                        var byte2 = readContinuationByte();
                        codePoint = ((byte1 & 0x1F) << 6) | byte2;
                        if (codePoint >= 0x80) {
                            return codePoint;
                        }
                        else {
                            throw Error('Invalid continuation byte');
                        }
                    }
                    // 3-byte sequence (may include unpaired surrogates)
                    if ((byte1 & 0xF0) == 0xE0) {
                        byte2 = readContinuationByte();
                        byte3 = readContinuationByte();
                        codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
                        if (codePoint >= 0x0800) {
                            checkScalarValue(codePoint);
                            return codePoint;
                        }
                        else {
                            throw Error('Invalid continuation byte');
                        }
                    }
                    // 4-byte sequence
                    if ((byte1 & 0xF8) == 0xF0) {
                        byte2 = readContinuationByte();
                        byte3 = readContinuationByte();
                        byte4 = readContinuationByte();
                        codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
                            (byte3 << 0x06) | byte4;
                        if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
                            return codePoint;
                        }
                    }
                    throw Error('Invalid UTF-8 detected');
                }
                var byteArray;
                var byteCount;
                var byteIndex;
                function utf8decode(byteString) {
                    byteArray = ucs2decode(byteString);
                    byteCount = byteArray.length;
                    byteIndex = 0;
                    var codePoints = [];
                    var tmp;
                    while ((tmp = decodeSymbol()) !== false) {
                        codePoints.push(tmp);
                    }
                    return ucs2encode(codePoints);
                }
                /*--------------------------------------------------------------------------*/
                var utf8 = {
                    'version': '2.0.0',
                    'encode': utf8encode,
                    'decode': utf8decode
                };
                // Some AMD build optimizers, like r.js, check for specific condition patterns
                // like the following:
                if (typeof define == 'function' &&
                    typeof define.amd == 'object' &&
                    define.amd) {
                    define(function () {
                        return utf8;
                    });
                }
                else if (freeExports && !freeExports.nodeType) {
                    if (freeModule) {
                        freeModule.exports = utf8;
                    }
                    else {
                        var object = {};
                        var hasOwnProperty = object.hasOwnProperty;
                        for (var key in utf8) {
                            hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
                        }
                    }
                }
                else {
                    root.utf8 = utf8;
                }
            }(this));
        }, {}], "bignumber.js": [function (require, module, exports) {
            /*! bignumber.js v2.0.7 https://github.com/MikeMcl/bignumber.js/LICENCE */
            ;
            (function (global) {
                'use strict';
                /*
                  bignumber.js v2.0.7
                  A JavaScript library for arbitrary-precision arithmetic.
                  https://github.com/MikeMcl/bignumber.js
                  Copyright (c) 2015 Michael Mclaughlin <M8ch88l@gmail.com>
                  MIT Expat Licence
                */
                var BigNumber, crypto, parseNumeric, isNumeric = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, notBool = ' not a boolean or binary digit', roundingMode = 'rounding mode', tooManyDigits = 'number type has more than 15 significant digits', ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_', BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 0x1fffffffffffff, 
                // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
                POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], SQRT_BASE = 1e7, 
                /*
                 * The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
                 * the arguments to toExponential, toFixed, toFormat, and toPrecision, beyond which an
                 * exception is thrown (if ERRORS is true).
                 */
                MAX = 1E9; // 0 to MAX_INT32
                /*
                 * Create and return a BigNumber constructor.
                 */
                function another(configObj) {
                    var div, 
                    // id tracks the caller function, so its name can be included in error messages.
                    id = 0, P = BigNumber.prototype, ONE = new BigNumber(1), 
                    /********************************* EDITABLE DEFAULTS **********************************/
                    /*
                     * The default values below must be integers within the inclusive ranges stated.
                     * The values can also be changed at run-time using BigNumber.config.
                     */
                    // The maximum number of decimal places for operations involving division.
                    DECIMAL_PLACES = 20, 
                    /*
                     * The rounding mode used when rounding to the above decimal places, and when using
                     * toExponential, toFixed, toFormat and toPrecision, and round (default value).
                     * UP         0 Away from zero.
                     * DOWN       1 Towards zero.
                     * CEIL       2 Towards +Infinity.
                     * FLOOR      3 Towards -Infinity.
                     * HALF_UP    4 Towards nearest neighbour. If equidistant, up.
                     * HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
                     * HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
                     * HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
                     * HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
                     */
                    ROUNDING_MODE = 4, 
                    // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
                    // The exponent value at and beneath which toString returns exponential notation.
                    // Number type: -7
                    TO_EXP_NEG = -7, 
                    // The exponent value at and above which toString returns exponential notation.
                    // Number type: 21
                    TO_EXP_POS = 21, 
                    // RANGE : [MIN_EXP, MAX_EXP]
                    // The minimum exponent value, beneath which underflow to zero occurs.
                    // Number type: -324  (5e-324)
                    MIN_EXP = -1e7, 
                    // The maximum exponent value, above which overflow to Infinity occurs.
                    // Number type:  308  (1.7976931348623157e+308)
                    // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
                    MAX_EXP = 1e7, 
                    // Whether BigNumber Errors are ever thrown.
                    ERRORS = true, 
                    // Change to intValidatorNoErrors if ERRORS is false.
                    isValidInt = intValidatorWithErrors, 
                    // Whether to use cryptographically-secure random number generation, if available.
                    CRYPTO = false, 
                    /*
                     * The modulo mode used when calculating the modulus: a mod n.
                     * The quotient (q = a / n) is calculated according to the corresponding rounding mode.
                     * The remainder (r) is calculated as: r = a - n * q.
                     *
                     * UP        0 The remainder is positive if the dividend is negative, else is negative.
                     * DOWN      1 The remainder has the same sign as the dividend.
                     *             This modulo mode is commonly known as 'truncated division' and is
                     *             equivalent to (a % n) in JavaScript.
                     * FLOOR     3 The remainder has the same sign as the divisor (Python %).
                     * HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
                     * EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
                     *             The remainder is always positive.
                     *
                     * The truncated division, floored division, Euclidian division and IEEE 754 remainder
                     * modes are commonly used for the modulus operation.
                     * Although the other rounding modes can also be used, they may not give useful results.
                     */
                    MODULO_MODE = 1, 
                    // The maximum number of significant digits of the result of the toPower operation.
                    // If POW_PRECISION is 0, there will be unlimited significant digits.
                    POW_PRECISION = 100, 
                    // The format specification used by the BigNumber.prototype.toFormat method.
                    FORMAT = {
                        decimalSeparator: '.',
                        groupSeparator: ',',
                        groupSize: 3,
                        secondaryGroupSize: 0,
                        fractionGroupSeparator: '\xA0',
                        fractionGroupSize: 0
                    };
                    /******************************************************************************************/
                    // CONSTRUCTOR
                    /*
                     * The BigNumber constructor and exported function.
                     * Create and return a new instance of a BigNumber object.
                     *
                     * n {number|string|BigNumber} A numeric value.
                     * [b] {number} The base of n. Integer, 2 to 64 inclusive.
                     */
                    function BigNumber(n, b) {
                        var c, e, i, num, len, str, x = this;
                        // Enable constructor usage without new.
                        if (!(x instanceof BigNumber)) {
                            // 'BigNumber() constructor call without new: {n}'
                            if (ERRORS)
                                raise(26, 'constructor call without new', n);
                            return new BigNumber(n, b);
                        }
                        // 'new BigNumber() base not an integer: {b}'
                        // 'new BigNumber() base out of range: {b}'
                        if (b == null || !isValidInt(b, 2, 64, id, 'base')) {
                            // Duplicate.
                            if (n instanceof BigNumber) {
                                x.s = n.s;
                                x.e = n.e;
                                x.c = (n = n.c) ? n.slice() : n;
                                id = 0;
                                return;
                            }
                            if ((num = typeof n == 'number') && n * 0 == 0) {
                                x.s = 1 / n < 0 ? (n = -n, -1) : 1;
                                // Fast path for integers.
                                if (n === ~~n) {
                                    for (e = 0, i = n; i >= 10; i /= 10, e++)
                                        ;
                                    x.e = e;
                                    x.c = [n];
                                    id = 0;
                                    return;
                                }
                                str = n + '';
                            }
                            else {
                                if (!isNumeric.test(str = n + ''))
                                    return parseNumeric(x, str, num);
                                x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
                            }
                        }
                        else {
                            b = b | 0;
                            str = n + '';
                            // Ensure return value is rounded to DECIMAL_PLACES as with other bases.
                            // Allow exponential notation to be used with base 10 argument.
                            if (b == 10) {
                                x = new BigNumber(n instanceof BigNumber ? n : str);
                                return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
                            }
                            // Avoid potential interpretation of Infinity and NaN as base 44+ values.
                            // Any number in exponential form will fail due to the [Ee][+-].
                            if ((num = typeof n == 'number') && n * 0 != 0 ||
                                !(new RegExp('^-?' + (c = '[' + ALPHABET.slice(0, b) + ']+') +
                                    '(?:\\.' + c + ')?$', b < 37 ? 'i' : '')).test(str)) {
                                return parseNumeric(x, str, num, b);
                            }
                            if (num) {
                                x.s = 1 / n < 0 ? (str = str.slice(1), -1) : 1;
                                if (ERRORS && str.replace(/^0\.0*|\./, '').length > 15) {
                                    // 'new BigNumber() number type has more than 15 significant digits: {n}'
                                    raise(id, tooManyDigits, n);
                                }
                                // Prevent later check for length on converted number.
                                num = false;
                            }
                            else {
                                x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
                            }
                            str = convertBase(str, 10, b, x.s);
                        }
                        // Decimal point?
                        if ((e = str.indexOf('.')) > -1)
                            str = str.replace('.', '');
                        // Exponential form?
                        if ((i = str.search(/e/i)) > 0) {
                            // Determine exponent.
                            if (e < 0)
                                e = i;
                            e += +str.slice(i + 1);
                            str = str.substring(0, i);
                        }
                        else if (e < 0) {
                            // Integer.
                            e = str.length;
                        }
                        // Determine leading zeros.
                        for (i = 0; str.charCodeAt(i) === 48; i++)
                            ;
                        // Determine trailing zeros.
                        for (len = str.length; str.charCodeAt(--len) === 48;)
                            ;
                        str = str.slice(i, len + 1);
                        if (str) {
                            len = str.length;
                            // Disallow numbers with over 15 significant digits if number type.
                            // 'new BigNumber() number type has more than 15 significant digits: {n}'
                            if (num && ERRORS && len > 15)
                                raise(id, tooManyDigits, x.s * n);
                            e = e - i - 1;
                            // Overflow?
                            if (e > MAX_EXP) {
                                // Infinity.
                                x.c = x.e = null;
                            }
                            else if (e < MIN_EXP) {
                                // Zero.
                                x.c = [x.e = 0];
                            }
                            else {
                                x.e = e;
                                x.c = [];
                                // Transform base
                                // e is the base 10 exponent.
                                // i is where to slice str to get the first element of the coefficient array.
                                i = (e + 1) % LOG_BASE;
                                if (e < 0)
                                    i += LOG_BASE;
                                if (i < len) {
                                    if (i)
                                        x.c.push(+str.slice(0, i));
                                    for (len -= LOG_BASE; i < len;) {
                                        x.c.push(+str.slice(i, i += LOG_BASE));
                                    }
                                    str = str.slice(i);
                                    i = LOG_BASE - str.length;
                                }
                                else {
                                    i -= len;
                                }
                                for (; i--; str += '0')
                                    ;
                                x.c.push(+str);
                            }
                        }
                        else {
                            // Zero.
                            x.c = [x.e = 0];
                        }
                        id = 0;
                    }
                    // CONSTRUCTOR PROPERTIES
                    BigNumber.another = another;
                    BigNumber.ROUND_UP = 0;
                    BigNumber.ROUND_DOWN = 1;
                    BigNumber.ROUND_CEIL = 2;
                    BigNumber.ROUND_FLOOR = 3;
                    BigNumber.ROUND_HALF_UP = 4;
                    BigNumber.ROUND_HALF_DOWN = 5;
                    BigNumber.ROUND_HALF_EVEN = 6;
                    BigNumber.ROUND_HALF_CEIL = 7;
                    BigNumber.ROUND_HALF_FLOOR = 8;
                    BigNumber.EUCLID = 9;
                    /*
                     * Configure infrequently-changing library-wide settings.
                     *
                     * Accept an object or an argument list, with one or many of the following properties or
                     * parameters respectively:
                     *
                     *   DECIMAL_PLACES  {number}  Integer, 0 to MAX inclusive
                     *   ROUNDING_MODE   {number}  Integer, 0 to 8 inclusive
                     *   EXPONENTIAL_AT  {number|number[]}  Integer, -MAX to MAX inclusive or
                     *                                      [integer -MAX to 0 incl., 0 to MAX incl.]
                     *   RANGE           {number|number[]}  Non-zero integer, -MAX to MAX inclusive or
                     *                                      [integer -MAX to -1 incl., integer 1 to MAX incl.]
                     *   ERRORS          {boolean|number}   true, false, 1 or 0
                     *   CRYPTO          {boolean|number}   true, false, 1 or 0
                     *   MODULO_MODE     {number}           0 to 9 inclusive
                     *   POW_PRECISION   {number}           0 to MAX inclusive
                     *   FORMAT          {object}           See BigNumber.prototype.toFormat
                     *      decimalSeparator       {string}
                     *      groupSeparator         {string}
                     *      groupSize              {number}
                     *      secondaryGroupSize     {number}
                     *      fractionGroupSeparator {string}
                     *      fractionGroupSize      {number}
                     *
                     * (The values assigned to the above FORMAT object properties are not checked for validity.)
                     *
                     * E.g.
                     * BigNumber.config(20, 4) is equivalent to
                     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
                     *
                     * Ignore properties/parameters set to null or undefined.
                     * Return an object with the properties current values.
                     */
                    BigNumber.config = function () {
                        var v, p, i = 0, r = {}, a = arguments, o = a[0], has = o && typeof o == 'object'
                            ? function () { if (o.hasOwnProperty(p))
                                return (v = o[p]) != null; }
                            : function () { if (a.length > i)
                                return (v = a[i++]) != null; };
                        // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
                        // 'config() DECIMAL_PLACES not an integer: {v}'
                        // 'config() DECIMAL_PLACES out of range: {v}'
                        if (has(p = 'DECIMAL_PLACES') && isValidInt(v, 0, MAX, 2, p)) {
                            DECIMAL_PLACES = v | 0;
                        }
                        r[p] = DECIMAL_PLACES;
                        // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
                        // 'config() ROUNDING_MODE not an integer: {v}'
                        // 'config() ROUNDING_MODE out of range: {v}'
                        if (has(p = 'ROUNDING_MODE') && isValidInt(v, 0, 8, 2, p)) {
                            ROUNDING_MODE = v | 0;
                        }
                        r[p] = ROUNDING_MODE;
                        // EXPONENTIAL_AT {number|number[]}
                        // Integer, -MAX to MAX inclusive or [integer -MAX to 0 inclusive, 0 to MAX inclusive].
                        // 'config() EXPONENTIAL_AT not an integer: {v}'
                        // 'config() EXPONENTIAL_AT out of range: {v}'
                        if (has(p = 'EXPONENTIAL_AT')) {
                            if (isArray(v)) {
                                if (isValidInt(v[0], -MAX, 0, 2, p) && isValidInt(v[1], 0, MAX, 2, p)) {
                                    TO_EXP_NEG = v[0] | 0;
                                    TO_EXP_POS = v[1] | 0;
                                }
                            }
                            else if (isValidInt(v, -MAX, MAX, 2, p)) {
                                TO_EXP_NEG = -(TO_EXP_POS = (v < 0 ? -v : v) | 0);
                            }
                        }
                        r[p] = [TO_EXP_NEG, TO_EXP_POS];
                        // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
                        // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
                        // 'config() RANGE not an integer: {v}'
                        // 'config() RANGE cannot be zero: {v}'
                        // 'config() RANGE out of range: {v}'
                        if (has(p = 'RANGE')) {
                            if (isArray(v)) {
                                if (isValidInt(v[0], -MAX, -1, 2, p) && isValidInt(v[1], 1, MAX, 2, p)) {
                                    MIN_EXP = v[0] | 0;
                                    MAX_EXP = v[1] | 0;
                                }
                            }
                            else if (isValidInt(v, -MAX, MAX, 2, p)) {
                                if (v | 0)
                                    MIN_EXP = -(MAX_EXP = (v < 0 ? -v : v) | 0);
                                else if (ERRORS)
                                    raise(2, p + ' cannot be zero', v);
                            }
                        }
                        r[p] = [MIN_EXP, MAX_EXP];
                        // ERRORS {boolean|number} true, false, 1 or 0.
                        // 'config() ERRORS not a boolean or binary digit: {v}'
                        if (has(p = 'ERRORS')) {
                            if (v === !!v || v === 1 || v === 0) {
                                id = 0;
                                isValidInt = (ERRORS = !!v) ? intValidatorWithErrors : intValidatorNoErrors;
                            }
                            else if (ERRORS) {
                                raise(2, p + notBool, v);
                            }
                        }
                        r[p] = ERRORS;
                        // CRYPTO {boolean|number} true, false, 1 or 0.
                        // 'config() CRYPTO not a boolean or binary digit: {v}'
                        // 'config() crypto unavailable: {crypto}'
                        if (has(p = 'CRYPTO')) {
                            if (v === !!v || v === 1 || v === 0) {
                                CRYPTO = !!(v && crypto && typeof crypto == 'object');
                                if (v && !CRYPTO && ERRORS)
                                    raise(2, 'crypto unavailable', crypto);
                            }
                            else if (ERRORS) {
                                raise(2, p + notBool, v);
                            }
                        }
                        r[p] = CRYPTO;
                        // MODULO_MODE {number} Integer, 0 to 9 inclusive.
                        // 'config() MODULO_MODE not an integer: {v}'
                        // 'config() MODULO_MODE out of range: {v}'
                        if (has(p = 'MODULO_MODE') && isValidInt(v, 0, 9, 2, p)) {
                            MODULO_MODE = v | 0;
                        }
                        r[p] = MODULO_MODE;
                        // POW_PRECISION {number} Integer, 0 to MAX inclusive.
                        // 'config() POW_PRECISION not an integer: {v}'
                        // 'config() POW_PRECISION out of range: {v}'
                        if (has(p = 'POW_PRECISION') && isValidInt(v, 0, MAX, 2, p)) {
                            POW_PRECISION = v | 0;
                        }
                        r[p] = POW_PRECISION;
                        // FORMAT {object}
                        // 'config() FORMAT not an object: {v}'
                        if (has(p = 'FORMAT')) {
                            if (typeof v == 'object') {
                                FORMAT = v;
                            }
                            else if (ERRORS) {
                                raise(2, p + ' not an object', v);
                            }
                        }
                        r[p] = FORMAT;
                        return r;
                    };
                    /*
                     * Return a new BigNumber whose value is the maximum of the arguments.
                     *
                     * arguments {number|string|BigNumber}
                     */
                    BigNumber.max = function () { return maxOrMin(arguments, P.lt); };
                    /*
                     * Return a new BigNumber whose value is the minimum of the arguments.
                     *
                     * arguments {number|string|BigNumber}
                     */
                    BigNumber.min = function () { return maxOrMin(arguments, P.gt); };
                    /*
                     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
                     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
                     * zeros are produced).
                     *
                     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
                     *
                     * 'random() decimal places not an integer: {dp}'
                     * 'random() decimal places out of range: {dp}'
                     * 'random() crypto unavailable: {crypto}'
                     */
                    BigNumber.random = (function () {
                        var pow2_53 = 0x20000000000000;
                        // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
                        // Check if Math.random() produces more than 32 bits of randomness.
                        // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
                        // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
                        var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
                            ? function () { return mathfloor(Math.random() * pow2_53); }
                            : function () {
                                return ((Math.random() * 0x40000000 | 0) * 0x800000) +
                                    (Math.random() * 0x800000 | 0);
                            };
                        return function (dp) {
                            var a, b, e, k, v, i = 0, c = [], rand = new BigNumber(ONE);
                            dp = dp == null || !isValidInt(dp, 0, MAX, 14) ? DECIMAL_PLACES : dp | 0;
                            k = mathceil(dp / LOG_BASE);
                            if (CRYPTO) {
                                // Browsers supporting crypto.getRandomValues.
                                if (crypto && crypto.getRandomValues) {
                                    a = crypto.getRandomValues(new Uint32Array(k *= 2));
                                    for (; i < k;) {
                                        // 53 bits:
                                        // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                                        // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                                        // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                                        //                                     11111 11111111 11111111
                                        // 0x20000 is 2^21.
                                        v = a[i] * 0x20000 + (a[i + 1] >>> 11);
                                        // Rejection sampling:
                                        // 0 <= v < 9007199254740992
                                        // Probability that v >= 9e15, is
                                        // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                                        if (v >= 9e15) {
                                            b = crypto.getRandomValues(new Uint32Array(2));
                                            a[i] = b[0];
                                            a[i + 1] = b[1];
                                        }
                                        else {
                                            // 0 <= v <= 8999999999999999
                                            // 0 <= (v % 1e14) <= 99999999999999
                                            c.push(v % 1e14);
                                            i += 2;
                                        }
                                    }
                                    i = k / 2;
                                }
                                else if (crypto && crypto.randomBytes) {
                                    // buffer
                                    a = crypto.randomBytes(k *= 7);
                                    for (; i < k;) {
                                        // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                                        // 0x100000000 is 2^32, 0x1000000 is 2^24
                                        // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                                        // 0 <= v < 9007199254740992
                                        v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                                            (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                                            (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                                        if (v >= 9e15) {
                                            crypto.randomBytes(7).copy(a, i);
                                        }
                                        else {
                                            // 0 <= (v % 1e14) <= 99999999999999
                                            c.push(v % 1e14);
                                            i += 7;
                                        }
                                    }
                                    i = k / 7;
                                }
                                else if (ERRORS) {
                                    raise(14, 'crypto unavailable', crypto);
                                }
                            }
                            // Use Math.random: CRYPTO is false or crypto is unavailable and ERRORS is false.
                            if (!i) {
                                for (; i < k;) {
                                    v = random53bitInt();
                                    if (v < 9e15)
                                        c[i++] = v % 1e14;
                                }
                            }
                            k = c[--i];
                            dp %= LOG_BASE;
                            // Convert trailing digits to zeros according to dp.
                            if (k && dp) {
                                v = POWS_TEN[LOG_BASE - dp];
                                c[i] = mathfloor(k / v) * v;
                            }
                            // Remove trailing elements which are zero.
                            for (; c[i] === 0; c.pop(), i--)
                                ;
                            // Zero?
                            if (i < 0) {
                                c = [e = 0];
                            }
                            else {
                                // Remove leading elements which are zero and adjust exponent accordingly.
                                for (e = -1; c[0] === 0; c.shift(), e -= LOG_BASE)
                                    ;
                                // Count the digits of the first element of c to determine leading zeros, and...
                                for (i = 1, v = c[0]; v >= 10; v /= 10, i++)
                                    ;
                                // adjust the exponent accordingly.
                                if (i < LOG_BASE)
                                    e -= LOG_BASE - i;
                            }
                            rand.e = e;
                            rand.c = c;
                            return rand;
                        };
                    })();
                    // PRIVATE FUNCTIONS
                    // Convert a numeric string of baseIn to a numeric string of baseOut.
                    function convertBase(str, baseOut, baseIn, sign) {
                        var d, e, k, r, x, xc, y, i = str.indexOf('.'), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
                        if (baseIn < 37)
                            str = str.toLowerCase();
                        // Non-integer.
                        if (i >= 0) {
                            k = POW_PRECISION;
                            // Unlimited precision.
                            POW_PRECISION = 0;
                            str = str.replace('.', '');
                            y = new BigNumber(baseIn);
                            x = y.pow(str.length - i);
                            POW_PRECISION = k;
                            // Convert str as if an integer, then restore the fraction part by dividing the
                            // result by its base raised to a power.
                            y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e), 10, baseOut);
                            y.e = y.c.length;
                        }
                        // Convert the number as integer.
                        xc = toBaseOut(str, baseIn, baseOut);
                        e = k = xc.length;
                        // Remove trailing zeros.
                        for (; xc[--k] == 0; xc.pop())
                            ;
                        if (!xc[0])
                            return '0';
                        if (i < 0) {
                            --e;
                        }
                        else {
                            x.c = xc;
                            x.e = e;
                            // sign is needed for correct rounding.
                            x.s = sign;
                            x = div(x, y, dp, rm, baseOut);
                            xc = x.c;
                            r = x.r;
                            e = x.e;
                        }
                        d = e + dp + 1;
                        // The rounding digit, i.e. the digit to the right of the digit that may be rounded up.
                        i = xc[d];
                        k = baseOut / 2;
                        r = r || d < 0 || xc[d + 1] != null;
                        r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
                            : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
                                rm == (x.s < 0 ? 8 : 7));
                        if (d < 1 || !xc[0]) {
                            // 1^-dp or 0.
                            str = r ? toFixedPoint('1', -dp) : '0';
                        }
                        else {
                            xc.length = d;
                            if (r) {
                                // Rounding up may mean the previous digit has to be rounded up and so on.
                                for (--baseOut; ++xc[--d] > baseOut;) {
                                    xc[d] = 0;
                                    if (!d) {
                                        ++e;
                                        xc.unshift(1);
                                    }
                                }
                            }
                            // Determine trailing zeros.
                            for (k = xc.length; !xc[--k];)
                                ;
                            // E.g. [4, 11, 15] becomes 4bf.
                            for (i = 0, str = ''; i <= k; str += ALPHABET.charAt(xc[i++]))
                                ;
                            str = toFixedPoint(str, e);
                        }
                        // The caller will add the sign.
                        return str;
                    }
                    // Perform division in the specified base. Called by div and convertBase.
                    div = (function () {
                        // Assume non-zero x and k.
                        function multiply(x, k, base) {
                            var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
                            for (x = x.slice(); i--;) {
                                xlo = x[i] % SQRT_BASE;
                                xhi = x[i] / SQRT_BASE | 0;
                                m = khi * xlo + xhi * klo;
                                temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
                                carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                                x[i] = temp % base;
                            }
                            if (carry)
                                x.unshift(carry);
                            return x;
                        }
                        function compare(a, b, aL, bL) {
                            var i, cmp;
                            if (aL != bL) {
                                cmp = aL > bL ? 1 : -1;
                            }
                            else {
                                for (i = cmp = 0; i < aL; i++) {
                                    if (a[i] != b[i]) {
                                        cmp = a[i] > b[i] ? 1 : -1;
                                        break;
                                    }
                                }
                            }
                            return cmp;
                        }
                        function subtract(a, b, aL, base) {
                            var i = 0;
                            // Subtract b from a.
                            for (; aL--;) {
                                a[aL] -= i;
                                i = a[aL] < b[aL] ? 1 : 0;
                                a[aL] = i * base + a[aL] - b[aL];
                            }
                            // Remove leading zeros.
                            for (; !a[0] && a.length > 1; a.shift())
                                ;
                        }
                        // x: dividend, y: divisor.
                        return function (x, y, dp, rm, base) {
                            var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
                            // Either NaN, Infinity or 0?
                            if (!xc || !xc[0] || !yc || !yc[0]) {
                                return new BigNumber(
                                // Return NaN if either NaN, or both Infinity or 0.
                                !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :
                                    // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                                    xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
                            }
                            q = new BigNumber(s);
                            qc = q.c = [];
                            e = x.e - y.e;
                            s = dp + e + 1;
                            if (!base) {
                                base = BASE;
                                e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                                s = s / LOG_BASE | 0;
                            }
                            // Result exponent may be one less then the current value of e.
                            // The coefficients of the BigNumbers from convertBase may have trailing zeros.
                            for (i = 0; yc[i] == (xc[i] || 0); i++)
                                ;
                            if (yc[i] > (xc[i] || 0))
                                e--;
                            if (s < 0) {
                                qc.push(1);
                                more = true;
                            }
                            else {
                                xL = xc.length;
                                yL = yc.length;
                                i = 0;
                                s += 2;
                                // Normalise xc and yc so highest order digit of yc is >= base / 2.
                                n = mathfloor(base / (yc[0] + 1));
                                // Not necessary, but to handle odd bases where yc[0] == ( base / 2 ) - 1.
                                // if ( n > 1 || n++ == 1 && yc[0] < base / 2 ) {
                                if (n > 1) {
                                    yc = multiply(yc, n, base);
                                    xc = multiply(xc, n, base);
                                    yL = yc.length;
                                    xL = xc.length;
                                }
                                xi = yL;
                                rem = xc.slice(0, yL);
                                remL = rem.length;
                                // Add zeros to make remainder as long as divisor.
                                for (; remL < yL; rem[remL++] = 0)
                                    ;
                                yz = yc.slice();
                                yz.unshift(0);
                                yc0 = yc[0];
                                if (yc[1] >= base / 2)
                                    yc0++;
                                // Not necessary, but to prevent trial digit n > base, when using base 3.
                                // else if ( base == 3 && yc0 == 1 ) yc0 = 1 + 1e-15;
                                do {
                                    n = 0;
                                    // Compare divisor and remainder.
                                    cmp = compare(yc, rem, yL, remL);
                                    // If divisor < remainder.
                                    if (cmp < 0) {
                                        // Calculate trial digit, n.
                                        rem0 = rem[0];
                                        if (yL != remL)
                                            rem0 = rem0 * base + (rem[1] || 0);
                                        // n is how many times the divisor goes into the current remainder.
                                        n = mathfloor(rem0 / yc0);
                                        //  Algorithm:
                                        //  1. product = divisor * trial digit (n)
                                        //  2. if product > remainder: product -= divisor, n--
                                        //  3. remainder -= product
                                        //  4. if product was < remainder at 2:
                                        //    5. compare new remainder and divisor
                                        //    6. If remainder > divisor: remainder -= divisor, n++
                                        if (n > 1) {
                                            // n may be > base only when base is 3.
                                            if (n >= base)
                                                n = base - 1;
                                            // product = divisor * trial digit.
                                            prod = multiply(yc, n, base);
                                            prodL = prod.length;
                                            remL = rem.length;
                                            // Compare product and remainder.
                                            // If product > remainder.
                                            // Trial digit n too high.
                                            // n is 1 too high about 5% of the time, and is not known to have
                                            // ever been more than 1 too high.
                                            while (compare(prod, rem, prodL, remL) == 1) {
                                                n--;
                                                // Subtract divisor from product.
                                                subtract(prod, yL < prodL ? yz : yc, prodL, base);
                                                prodL = prod.length;
                                                cmp = 1;
                                            }
                                        }
                                        else {
                                            // n is 0 or 1, cmp is -1.
                                            // If n is 0, there is no need to compare yc and rem again below,
                                            // so change cmp to 1 to avoid it.
                                            // If n is 1, leave cmp as -1, so yc and rem are compared again.
                                            if (n == 0) {
                                                // divisor < remainder, so n must be at least 1.
                                                cmp = n = 1;
                                            }
                                            // product = divisor
                                            prod = yc.slice();
                                            prodL = prod.length;
                                        }
                                        if (prodL < remL)
                                            prod.unshift(0);
                                        // Subtract product from remainder.
                                        subtract(rem, prod, remL, base);
                                        remL = rem.length;
                                        // If product was < remainder.
                                        if (cmp == -1) {
                                            // Compare divisor and new remainder.
                                            // If divisor < new remainder, subtract divisor from remainder.
                                            // Trial digit n too low.
                                            // n is 1 too low about 5% of the time, and very rarely 2 too low.
                                            while (compare(yc, rem, yL, remL) < 1) {
                                                n++;
                                                // Subtract divisor from remainder.
                                                subtract(rem, yL < remL ? yz : yc, remL, base);
                                                remL = rem.length;
                                            }
                                        }
                                    }
                                    else if (cmp === 0) {
                                        n++;
                                        rem = [0];
                                    } // else cmp === 1 and n will be 0
                                    // Add the next digit, n, to the result array.
                                    qc[i++] = n;
                                    // Update the remainder.
                                    if (rem[0]) {
                                        rem[remL++] = xc[xi] || 0;
                                    }
                                    else {
                                        rem = [xc[xi]];
                                        remL = 1;
                                    }
                                } while ((xi++ < xL || rem[0] != null) && s--);
                                more = rem[0] != null;
                                // Leading zero?
                                if (!qc[0])
                                    qc.shift();
                            }
                            if (base == BASE) {
                                // To calculate q.e, first get the number of digits of qc[0].
                                for (i = 1, s = qc[0]; s >= 10; s /= 10, i++)
                                    ;
                                round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
                            }
                            else {
                                q.e = e;
                                q.r = +more;
                            }
                            return q;
                        };
                    })();
                    /*
                     * Return a string representing the value of BigNumber n in fixed-point or exponential
                     * notation rounded to the specified decimal places or significant digits.
                     *
                     * n is a BigNumber.
                     * i is the index of the last digit required (i.e. the digit that may be rounded up).
                     * rm is the rounding mode.
                     * caller is caller id: toExponential 19, toFixed 20, toFormat 21, toPrecision 24.
                     */
                    function format(n, i, rm, caller) {
                        var c0, e, ne, len, str;
                        rm = rm != null && isValidInt(rm, 0, 8, caller, roundingMode)
                            ? rm | 0 : ROUNDING_MODE;
                        if (!n.c)
                            return n.toString();
                        c0 = n.c[0];
                        ne = n.e;
                        if (i == null) {
                            str = coeffToString(n.c);
                            str = caller == 19 || caller == 24 && ne <= TO_EXP_NEG
                                ? toExponential(str, ne)
                                : toFixedPoint(str, ne);
                        }
                        else {
                            n = round(new BigNumber(n), i, rm);
                            // n.e may have changed if the value was rounded up.
                            e = n.e;
                            str = coeffToString(n.c);
                            len = str.length;
                            // toPrecision returns exponential notation if the number of significant digits
                            // specified is less than the number of digits necessary to represent the integer
                            // part of the value in fixed-point notation.
                            // Exponential notation.
                            if (caller == 19 || caller == 24 && (i <= e || e <= TO_EXP_NEG)) {
                                // Append zeros?
                                for (; len < i; str += '0', len++)
                                    ;
                                str = toExponential(str, e);
                            }
                            else {
                                i -= ne;
                                str = toFixedPoint(str, e);
                                // Append zeros?
                                if (e + 1 > len) {
                                    if (--i > 0)
                                        for (str += '.'; i--; str += '0')
                                            ;
                                }
                                else {
                                    i += e - len;
                                    if (i > 0) {
                                        if (e + 1 == len)
                                            str += '.';
                                        for (; i--; str += '0')
                                            ;
                                    }
                                }
                            }
                        }
                        return n.s < 0 && c0 ? '-' + str : str;
                    }
                    // Handle BigNumber.max and BigNumber.min.
                    function maxOrMin(args, method) {
                        var m, n, i = 0;
                        if (isArray(args[0]))
                            args = args[0];
                        m = new BigNumber(args[0]);
                        for (; ++i < args.length;) {
                            n = new BigNumber(args[i]);
                            // If any number is NaN, return NaN.
                            if (!n.s) {
                                m = n;
                                break;
                            }
                            else if (method.call(m, n)) {
                                m = n;
                            }
                        }
                        return m;
                    }
                    /*
                     * Return true if n is an integer in range, otherwise throw.
                     * Use for argument validation when ERRORS is true.
                     */
                    function intValidatorWithErrors(n, min, max, caller, name) {
                        if (n < min || n > max || n != truncate(n)) {
                            raise(caller, (name || 'decimal places') +
                                (n < min || n > max ? ' out of range' : ' not an integer'), n);
                        }
                        return true;
                    }
                    /*
                     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
                     * Called by minus, plus and times.
                     */
                    function normalise(n, c, e) {
                        var i = 1, j = c.length;
                        // Remove trailing zeros.
                        for (; !c[--j]; c.pop())
                            ;
                        // Calculate the base 10 exponent. First get the number of digits of c[0].
                        for (j = c[0]; j >= 10; j /= 10, i++)
                            ;
                        // Overflow?
                        if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
                            // Infinity.
                            n.c = n.e = null;
                        }
                        else if (e < MIN_EXP) {
                            // Zero.
                            n.c = [n.e = 0];
                        }
                        else {
                            n.e = e;
                            n.c = c;
                        }
                        return n;
                    }
                    // Handle values that fail the validity test in BigNumber.
                    parseNumeric = (function () {
                        var basePrefix = /^(-?)0([xbo])/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+|^\s+|\s+$/g;
                        return function (x, str, num, b) {
                            var base, s = num ? str : str.replace(whitespaceOrPlus, '');
                            // No exception on ±Infinity or NaN.
                            if (isInfinityOrNaN.test(s)) {
                                x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                            }
                            else {
                                if (!num) {
                                    // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                                    s = s.replace(basePrefix, function (m, p1, p2) {
                                        base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                                        return !b || b == base ? p1 : m;
                                    });
                                    if (b) {
                                        base = b;
                                        // E.g. '1.' to '1', '.1' to '0.1'
                                        s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
                                    }
                                    if (str != s)
                                        return new BigNumber(s, base);
                                }
                                // 'new BigNumber() not a number: {n}'
                                // 'new BigNumber() not a base {b} number: {n}'
                                if (ERRORS)
                                    raise(id, 'not a' + (b ? ' base ' + b : '') + ' number', str);
                                x.s = null;
                            }
                            x.c = x.e = null;
                            id = 0;
                        };
                    })();
                    // Throw a BigNumber Error.
                    function raise(caller, msg, val) {
                        var error = new Error([
                            'new BigNumber',
                            'cmp',
                            'config',
                            'div',
                            'divToInt',
                            'eq',
                            'gt',
                            'gte',
                            'lt',
                            'lte',
                            'minus',
                            'mod',
                            'plus',
                            'precision',
                            'random',
                            'round',
                            'shift',
                            'times',
                            'toDigits',
                            'toExponential',
                            'toFixed',
                            'toFormat',
                            'toFraction',
                            'pow',
                            'toPrecision',
                            'toString',
                            'BigNumber' // 26
                        ][caller] + '() ' + msg + ': ' + val);
                        error.name = 'BigNumber Error';
                        id = 0;
                        throw error;
                    }
                    /*
                     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
                     * If r is truthy, it is known that there are more digits after the rounding digit.
                     */
                    function round(x, sd, rm, r) {
                        var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
                        // if x is not Infinity or NaN...
                        if (xc) {
                            // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
                            // n is a base 1e14 number, the value of the element of array x.c containing rd.
                            // ni is the index of n within x.c.
                            // d is the number of digits of n.
                            // i is the index of rd within n including leading zeros.
                            // j is the actual index of rd within n (if < 0, rd is a leading zero).
                            out: {
                                // Get the number of digits of the first element of xc.
                                for (d = 1, k = xc[0]; k >= 10; k /= 10, d++)
                                    ;
                                i = sd - d;
                                // If the rounding digit is in the first element of xc...
                                if (i < 0) {
                                    i += LOG_BASE;
                                    j = sd;
                                    n = xc[ni = 0];
                                    // Get the rounding digit at index j of n.
                                    rd = n / pows10[d - j - 1] % 10 | 0;
                                }
                                else {
                                    ni = mathceil((i + 1) / LOG_BASE);
                                    if (ni >= xc.length) {
                                        if (r) {
                                            // Needed by sqrt.
                                            for (; xc.length <= ni; xc.push(0))
                                                ;
                                            n = rd = 0;
                                            d = 1;
                                            i %= LOG_BASE;
                                            j = i - LOG_BASE + 1;
                                        }
                                        else {
                                            break out;
                                        }
                                    }
                                    else {
                                        n = k = xc[ni];
                                        // Get the number of digits of n.
                                        for (d = 1; k >= 10; k /= 10, d++)
                                            ;
                                        // Get the index of rd within n.
                                        i %= LOG_BASE;
                                        // Get the index of rd within n, adjusted for leading zeros.
                                        // The number of leading zeros of n is given by LOG_BASE - d.
                                        j = i - LOG_BASE + d;
                                        // Get the rounding digit at index j of n.
                                        rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                                    }
                                }
                                r = r || sd < 0 ||
                                    // Are there any non-zero digits after the rounding digit?
                                    // The expression  n % pows10[ d - j - 1 ]  returns all digits of n to the right
                                    // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                                    xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
                                r = rm < 4
                                    ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
                                    : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&
                                        // Check whether the digit to the left of the rounding digit is odd.
                                        ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
                                        rm == (x.s < 0 ? 8 : 7));
                                if (sd < 1 || !xc[0]) {
                                    xc.length = 0;
                                    if (r) {
                                        // Convert sd to decimal places.
                                        sd -= x.e + 1;
                                        // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                                        xc[0] = pows10[sd % LOG_BASE];
                                        x.e = -sd || 0;
                                    }
                                    else {
                                        // Zero.
                                        xc[0] = x.e = 0;
                                    }
                                    return x;
                                }
                                // Remove excess digits.
                                if (i == 0) {
                                    xc.length = ni;
                                    k = 1;
                                    ni--;
                                }
                                else {
                                    xc.length = ni + 1;
                                    k = pows10[LOG_BASE - i];
                                    // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                                    // j > 0 means i > number of leading zeros of n.
                                    xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
                                }
                                // Round up?
                                if (r) {
                                    for (;;) {
                                        // If the digit to be rounded up is in the first element of xc...
                                        if (ni == 0) {
                                            // i will be the length of xc[0] before k is added.
                                            for (i = 1, j = xc[0]; j >= 10; j /= 10, i++)
                                                ;
                                            j = xc[0] += k;
                                            for (k = 1; j >= 10; j /= 10, k++)
                                                ;
                                            // if i != k the length has increased.
                                            if (i != k) {
                                                x.e++;
                                                if (xc[0] == BASE)
                                                    xc[0] = 1;
                                            }
                                            break;
                                        }
                                        else {
                                            xc[ni] += k;
                                            if (xc[ni] != BASE)
                                                break;
                                            xc[ni--] = 0;
                                            k = 1;
                                        }
                                    }
                                }
                                // Remove trailing zeros.
                                for (i = xc.length; xc[--i] === 0; xc.pop())
                                    ;
                            }
                            // Overflow? Infinity.
                            if (x.e > MAX_EXP) {
                                x.c = x.e = null;
                            }
                            else if (x.e < MIN_EXP) {
                                x.c = [x.e = 0];
                            }
                        }
                        return x;
                    }
                    // PROTOTYPE/INSTANCE METHODS
                    /*
                     * Return a new BigNumber whose value is the absolute value of this BigNumber.
                     */
                    P.absoluteValue = P.abs = function () {
                        var x = new BigNumber(this);
                        if (x.s < 0)
                            x.s = 1;
                        return x;
                    };
                    /*
                     * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
                     * number in the direction of Infinity.
                     */
                    P.ceil = function () {
                        return round(new BigNumber(this), this.e + 1, 2);
                    };
                    /*
                     * Return
                     * 1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
                     * -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
                     * 0 if they have the same value,
                     * or null if the value of either is NaN.
                     */
                    P.comparedTo = P.cmp = function (y, b) {
                        id = 1;
                        return compare(this, new BigNumber(y, b));
                    };
                    /*
                     * Return the number of decimal places of the value of this BigNumber, or null if the value
                     * of this BigNumber is ±Infinity or NaN.
                     */
                    P.decimalPlaces = P.dp = function () {
                        var n, v, c = this.c;
                        if (!c)
                            return null;
                        n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
                        // Subtract the number of trailing zeros of the last number.
                        if (v = c[v])
                            for (; v % 10 == 0; v /= 10, n--)
                                ;
                        if (n < 0)
                            n = 0;
                        return n;
                    };
                    /*
                     *  n / 0 = I
                     *  n / N = N
                     *  n / I = 0
                     *  0 / n = 0
                     *  0 / 0 = N
                     *  0 / N = N
                     *  0 / I = 0
                     *  N / n = N
                     *  N / 0 = N
                     *  N / N = N
                     *  N / I = N
                     *  I / n = I
                     *  I / 0 = I
                     *  I / N = N
                     *  I / I = N
                     *
                     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
                     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
                     */
                    P.dividedBy = P.div = function (y, b) {
                        id = 3;
                        return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
                    };
                    /*
                     * Return a new BigNumber whose value is the integer part of dividing the value of this
                     * BigNumber by the value of BigNumber(y, b).
                     */
                    P.dividedToIntegerBy = P.divToInt = function (y, b) {
                        id = 4;
                        return div(this, new BigNumber(y, b), 0, 1);
                    };
                    /*
                     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
                     * otherwise returns false.
                     */
                    P.equals = P.eq = function (y, b) {
                        id = 5;
                        return compare(this, new BigNumber(y, b)) === 0;
                    };
                    /*
                     * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
                     * number in the direction of -Infinity.
                     */
                    P.floor = function () {
                        return round(new BigNumber(this), this.e + 1, 3);
                    };
                    /*
                     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
                     * otherwise returns false.
                     */
                    P.greaterThan = P.gt = function (y, b) {
                        id = 6;
                        return compare(this, new BigNumber(y, b)) > 0;
                    };
                    /*
                     * Return true if the value of this BigNumber is greater than or equal to the value of
                     * BigNumber(y, b), otherwise returns false.
                     */
                    P.greaterThanOrEqualTo = P.gte = function (y, b) {
                        id = 7;
                        return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
                    };
                    /*
                     * Return true if the value of this BigNumber is a finite number, otherwise returns false.
                     */
                    P.isFinite = function () {
                        return !!this.c;
                    };
                    /*
                     * Return true if the value of this BigNumber is an integer, otherwise return false.
                     */
                    P.isInteger = P.isInt = function () {
                        return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
                    };
                    /*
                     * Return true if the value of this BigNumber is NaN, otherwise returns false.
                     */
                    P.isNaN = function () {
                        return !this.s;
                    };
                    /*
                     * Return true if the value of this BigNumber is negative, otherwise returns false.
                     */
                    P.isNegative = P.isNeg = function () {
                        return this.s < 0;
                    };
                    /*
                     * Return true if the value of this BigNumber is 0 or -0, otherwise returns false.
                     */
                    P.isZero = function () {
                        return !!this.c && this.c[0] == 0;
                    };
                    /*
                     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
                     * otherwise returns false.
                     */
                    P.lessThan = P.lt = function (y, b) {
                        id = 8;
                        return compare(this, new BigNumber(y, b)) < 0;
                    };
                    /*
                     * Return true if the value of this BigNumber is less than or equal to the value of
                     * BigNumber(y, b), otherwise returns false.
                     */
                    P.lessThanOrEqualTo = P.lte = function (y, b) {
                        id = 9;
                        return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
                    };
                    /*
                     *  n - 0 = n
                     *  n - N = N
                     *  n - I = -I
                     *  0 - n = -n
                     *  0 - 0 = 0
                     *  0 - N = N
                     *  0 - I = -I
                     *  N - n = N
                     *  N - 0 = N
                     *  N - N = N
                     *  N - I = N
                     *  I - n = I
                     *  I - 0 = I
                     *  I - N = N
                     *  I - I = N
                     *
                     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
                     * BigNumber(y, b).
                     */
                    P.minus = P.sub = function (y, b) {
                        var i, j, t, xLTy, x = this, a = x.s;
                        id = 10;
                        y = new BigNumber(y, b);
                        b = y.s;
                        // Either NaN?
                        if (!a || !b)
                            return new BigNumber(NaN);
                        // Signs differ?
                        if (a != b) {
                            y.s = -b;
                            return x.plus(y);
                        }
                        var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
                        if (!xe || !ye) {
                            // Either Infinity?
                            if (!xc || !yc)
                                return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);
                            // Either zero?
                            if (!xc[0] || !yc[0]) {
                                // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                                return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :
                                    // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                                    ROUNDING_MODE == 3 ? -0 : 0);
                            }
                        }
                        xe = bitFloor(xe);
                        ye = bitFloor(ye);
                        xc = xc.slice();
                        // Determine which is the bigger number.
                        if (a = xe - ye) {
                            if (xLTy = a < 0) {
                                a = -a;
                                t = xc;
                            }
                            else {
                                ye = xe;
                                t = yc;
                            }
                            t.reverse();
                            // Prepend zeros to equalise exponents.
                            for (b = a; b--; t.push(0))
                                ;
                            t.reverse();
                        }
                        else {
                            // Exponents equal. Check digit by digit.
                            j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
                            for (a = b = 0; b < j; b++) {
                                if (xc[b] != yc[b]) {
                                    xLTy = xc[b] < yc[b];
                                    break;
                                }
                            }
                        }
                        // x < y? Point xc to the array of the bigger number.
                        if (xLTy)
                            t = xc, xc = yc, yc = t, y.s = -y.s;
                        b = (j = yc.length) - (i = xc.length);
                        // Append zeros to xc if shorter.
                        // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
                        if (b > 0)
                            for (; b--; xc[i++] = 0)
                                ;
                        b = BASE - 1;
                        // Subtract yc from xc.
                        for (; j > a;) {
                            if (xc[--j] < yc[j]) {
                                for (i = j; i && !xc[--i]; xc[i] = b)
                                    ;
                                --xc[i];
                                xc[j] += BASE;
                            }
                            xc[j] -= yc[j];
                        }
                        // Remove leading zeros and adjust exponent accordingly.
                        for (; xc[0] == 0; xc.shift(), --ye)
                            ;
                        // Zero?
                        if (!xc[0]) {
                            // Following IEEE 754 (2008) 6.3,
                            // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
                            y.s = ROUNDING_MODE == 3 ? -1 : 1;
                            y.c = [y.e = 0];
                            return y;
                        }
                        // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
                        // for finite x and y.
                        return normalise(y, xc, ye);
                    };
                    /*
                     *   n % 0 =  N
                     *   n % N =  N
                     *   n % I =  n
                     *   0 % n =  0
                     *  -0 % n = -0
                     *   0 % 0 =  N
                     *   0 % N =  N
                     *   0 % I =  0
                     *   N % n =  N
                     *   N % 0 =  N
                     *   N % N =  N
                     *   N % I =  N
                     *   I % n =  N
                     *   I % 0 =  N
                     *   I % N =  N
                     *   I % I =  N
                     *
                     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
                     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
                     */
                    P.modulo = P.mod = function (y, b) {
                        var q, s, x = this;
                        id = 11;
                        y = new BigNumber(y, b);
                        // Return NaN if x is Infinity or NaN, or y is NaN or zero.
                        if (!x.c || !y.s || y.c && !y.c[0]) {
                            return new BigNumber(NaN);
                        }
                        else if (!y.c || x.c && !x.c[0]) {
                            return new BigNumber(x);
                        }
                        if (MODULO_MODE == 9) {
                            // Euclidian division: q = sign(y) * floor(x / abs(y))
                            // r = x - qy    where  0 <= r < abs(y)
                            s = y.s;
                            y.s = 1;
                            q = div(x, y, 0, 3);
                            y.s = s;
                            q.s *= s;
                        }
                        else {
                            q = div(x, y, 0, MODULO_MODE);
                        }
                        return x.minus(q.times(y));
                    };
                    /*
                     * Return a new BigNumber whose value is the value of this BigNumber negated,
                     * i.e. multiplied by -1.
                     */
                    P.negated = P.neg = function () {
                        var x = new BigNumber(this);
                        x.s = -x.s || null;
                        return x;
                    };
                    /*
                     *  n + 0 = n
                     *  n + N = N
                     *  n + I = I
                     *  0 + n = n
                     *  0 + 0 = 0
                     *  0 + N = N
                     *  0 + I = I
                     *  N + n = N
                     *  N + 0 = N
                     *  N + N = N
                     *  N + I = N
                     *  I + n = I
                     *  I + 0 = I
                     *  I + N = N
                     *  I + I = I
                     *
                     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
                     * BigNumber(y, b).
                     */
                    P.plus = P.add = function (y, b) {
                        var t, x = this, a = x.s;
                        id = 12;
                        y = new BigNumber(y, b);
                        b = y.s;
                        // Either NaN?
                        if (!a || !b)
                            return new BigNumber(NaN);
                        // Signs differ?
                        if (a != b) {
                            y.s = -b;
                            return x.minus(y);
                        }
                        var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
                        if (!xe || !ye) {
                            // Return ±Infinity if either ±Infinity.
                            if (!xc || !yc)
                                return new BigNumber(a / 0);
                            // Either zero?
                            // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                            if (!xc[0] || !yc[0])
                                return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
                        }
                        xe = bitFloor(xe);
                        ye = bitFloor(ye);
                        xc = xc.slice();
                        // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
                        if (a = xe - ye) {
                            if (a > 0) {
                                ye = xe;
                                t = yc;
                            }
                            else {
                                a = -a;
                                t = xc;
                            }
                            t.reverse();
                            for (; a--; t.push(0))
                                ;
                            t.reverse();
                        }
                        a = xc.length;
                        b = yc.length;
                        // Point xc to the longer array, and b to the shorter length.
                        if (a - b < 0)
                            t = yc, yc = xc, xc = t, b = a;
                        // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
                        for (a = 0; b;) {
                            a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
                            xc[b] %= BASE;
                        }
                        if (a) {
                            xc.unshift(a);
                            ++ye;
                        }
                        // No need to check for zero, as +x + +y != 0 && -x + -y != 0
                        // ye = MAX_EXP + 1 possible
                        return normalise(y, xc, ye);
                    };
                    /*
                     * Return the number of significant digits of the value of this BigNumber.
                     *
                     * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
                     */
                    P.precision = P.sd = function (z) {
                        var n, v, x = this, c = x.c;
                        // 'precision() argument not a boolean or binary digit: {z}'
                        if (z != null && z !== !!z && z !== 1 && z !== 0) {
                            if (ERRORS)
                                raise(13, 'argument' + notBool, z);
                            if (z != !!z)
                                z = null;
                        }
                        if (!c)
                            return null;
                        v = c.length - 1;
                        n = v * LOG_BASE + 1;
                        if (v = c[v]) {
                            // Subtract the number of trailing zeros of the last element.
                            for (; v % 10 == 0; v /= 10, n--)
                                ;
                            // Add the number of digits of the first element.
                            for (v = c[0]; v >= 10; v /= 10, n++)
                                ;
                        }
                        if (z && x.e + 1 > n)
                            n = x.e + 1;
                        return n;
                    };
                    /*
                     * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
                     * dp decimal places using rounding mode rm, or to 0 and ROUNDING_MODE respectively if
                     * omitted.
                     *
                     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
                     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
                     *
                     * 'round() decimal places out of range: {dp}'
                     * 'round() decimal places not an integer: {dp}'
                     * 'round() rounding mode not an integer: {rm}'
                     * 'round() rounding mode out of range: {rm}'
                     */
                    P.round = function (dp, rm) {
                        var n = new BigNumber(this);
                        if (dp == null || isValidInt(dp, 0, MAX, 15)) {
                            round(n, ~~dp + this.e + 1, rm == null ||
                                !isValidInt(rm, 0, 8, 15, roundingMode) ? ROUNDING_MODE : rm | 0);
                        }
                        return n;
                    };
                    /*
                     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
                     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
                     *
                     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
                     *
                     * If k is out of range and ERRORS is false, the result will be ±0 if k < 0, or ±Infinity
                     * otherwise.
                     *
                     * 'shift() argument not an integer: {k}'
                     * 'shift() argument out of range: {k}'
                     */
                    P.shift = function (k) {
                        var n = this;
                        return isValidInt(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 16, 'argument')
                            ? n.times('1e' + truncate(k))
                            : new BigNumber(n.c && n.c[0] && (k < -MAX_SAFE_INTEGER || k > MAX_SAFE_INTEGER)
                                ? n.s * (k < 0 ? 0 : 1 / 0)
                                : n);
                    };
                    /*
                     *  sqrt(-n) =  N
                     *  sqrt( N) =  N
                     *  sqrt(-I) =  N
                     *  sqrt( I) =  I
                     *  sqrt( 0) =  0
                     *  sqrt(-0) = -0
                     *
                     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
                     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
                     */
                    P.squareRoot = P.sqrt = function () {
                        var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber('0.5');
                        // Negative/NaN/Infinity/zero?
                        if (s !== 1 || !c || !c[0]) {
                            return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
                        }
                        // Initial estimate.
                        s = Math.sqrt(+x);
                        // Math.sqrt underflow/overflow?
                        // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
                        if (s == 0 || s == 1 / 0) {
                            n = coeffToString(c);
                            if ((n.length + e) % 2 == 0)
                                n += '0';
                            s = Math.sqrt(n);
                            e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
                            if (s == 1 / 0) {
                                n = '1e' + e;
                            }
                            else {
                                n = s.toExponential();
                                n = n.slice(0, n.indexOf('e') + 1) + e;
                            }
                            r = new BigNumber(n);
                        }
                        else {
                            r = new BigNumber(s + '');
                        }
                        // Check for zero.
                        // r could be zero if MIN_EXP is changed after the this value was created.
                        // This would cause a division by zero (x/t) and hence Infinity below, which would cause
                        // coeffToString to throw.
                        if (r.c[0]) {
                            e = r.e;
                            s = e + dp;
                            if (s < 3)
                                s = 0;
                            // Newton-Raphson iteration.
                            for (;;) {
                                t = r;
                                r = half.times(t.plus(div(x, t, dp, 1)));
                                if (coeffToString(t.c).slice(0, s) === (n =
                                    coeffToString(r.c)).slice(0, s)) {
                                    // The exponent of r may here be one less than the final result exponent,
                                    // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                                    // are indexed correctly.
                                    if (r.e < e)
                                        --s;
                                    n = n.slice(s - 3, s + 1);
                                    // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                                    // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                                    // iteration.
                                    if (n == '9999' || !rep && n == '4999') {
                                        // On the first iteration only, check to see if rounding up gives the
                                        // exact result as the nines may infinitely repeat.
                                        if (!rep) {
                                            round(t, t.e + DECIMAL_PLACES + 2, 0);
                                            if (t.times(t).eq(x)) {
                                                r = t;
                                                break;
                                            }
                                        }
                                        dp += 4;
                                        s += 4;
                                        rep = 1;
                                    }
                                    else {
                                        // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                                        // result. If not, then there are further digits and m will be truthy.
                                        if (!+n || !+n.slice(1) && n.charAt(0) == '5') {
                                            // Truncate to the first rounding digit.
                                            round(r, r.e + DECIMAL_PLACES + 2, 1);
                                            m = !r.times(r).eq(x);
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
                    };
                    /*
                     *  n * 0 = 0
                     *  n * N = N
                     *  n * I = I
                     *  0 * n = 0
                     *  0 * 0 = 0
                     *  0 * N = N
                     *  0 * I = N
                     *  N * n = N
                     *  N * 0 = N
                     *  N * N = N
                     *  N * I = N
                     *  I * n = I
                     *  I * 0 = N
                     *  I * N = N
                     *  I * I = I
                     *
                     * Return a new BigNumber whose value is the value of this BigNumber times the value of
                     * BigNumber(y, b).
                     */
                    P.times = P.mul = function (y, b) {
                        var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (id = 17, y = new BigNumber(y, b)).c;
                        // Either NaN, ±Infinity or ±0?
                        if (!xc || !yc || !xc[0] || !yc[0]) {
                            // Return NaN if either is NaN, or one is 0 and the other is Infinity.
                            if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
                                y.c = y.e = y.s = null;
                            }
                            else {
                                y.s *= x.s;
                                // Return ±Infinity if either is ±Infinity.
                                if (!xc || !yc) {
                                    y.c = y.e = null;
                                }
                                else {
                                    y.c = [0];
                                    y.e = 0;
                                }
                            }
                            return y;
                        }
                        e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
                        y.s *= x.s;
                        xcL = xc.length;
                        ycL = yc.length;
                        // Ensure xc points to longer array and xcL to its length.
                        if (xcL < ycL)
                            zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;
                        // Initialise the result array with zeros.
                        for (i = xcL + ycL, zc = []; i--; zc.push(0))
                            ;
                        base = BASE;
                        sqrtBase = SQRT_BASE;
                        for (i = ycL; --i >= 0;) {
                            c = 0;
                            ylo = yc[i] % sqrtBase;
                            yhi = yc[i] / sqrtBase | 0;
                            for (k = xcL, j = i + k; j > i;) {
                                xlo = xc[--k] % sqrtBase;
                                xhi = xc[k] / sqrtBase | 0;
                                m = yhi * xlo + xhi * ylo;
                                xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
                                c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                                zc[j--] = xlo % base;
                            }
                            zc[j] = c;
                        }
                        if (c) {
                            ++e;
                        }
                        else {
                            zc.shift();
                        }
                        return normalise(y, zc, e);
                    };
                    /*
                     * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
                     * sd significant digits using rounding mode rm, or ROUNDING_MODE if rm is omitted.
                     *
                     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
                     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
                     *
                     * 'toDigits() precision out of range: {sd}'
                     * 'toDigits() precision not an integer: {sd}'
                     * 'toDigits() rounding mode not an integer: {rm}'
                     * 'toDigits() rounding mode out of range: {rm}'
                     */
                    P.toDigits = function (sd, rm) {
                        var n = new BigNumber(this);
                        sd = sd == null || !isValidInt(sd, 1, MAX, 18, 'precision') ? null : sd | 0;
                        rm = rm == null || !isValidInt(rm, 0, 8, 18, roundingMode) ? ROUNDING_MODE : rm | 0;
                        return sd ? round(n, sd, rm) : n;
                    };
                    /*
                     * Return a string representing the value of this BigNumber in exponential notation and
                     * rounded using ROUNDING_MODE to dp fixed decimal places.
                     *
                     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
                     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
                     *
                     * 'toExponential() decimal places not an integer: {dp}'
                     * 'toExponential() decimal places out of range: {dp}'
                     * 'toExponential() rounding mode not an integer: {rm}'
                     * 'toExponential() rounding mode out of range: {rm}'
                     */
                    P.toExponential = function (dp, rm) {
                        return format(this, dp != null && isValidInt(dp, 0, MAX, 19) ? ~~dp + 1 : null, rm, 19);
                    };
                    /*
                     * Return a string representing the value of this BigNumber in fixed-point notation rounding
                     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
                     *
                     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
                     * but e.g. (-0.00001).toFixed(0) is '-0'.
                     *
                     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
                     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
                     *
                     * 'toFixed() decimal places not an integer: {dp}'
                     * 'toFixed() decimal places out of range: {dp}'
                     * 'toFixed() rounding mode not an integer: {rm}'
                     * 'toFixed() rounding mode out of range: {rm}'
                     */
                    P.toFixed = function (dp, rm) {
                        return format(this, dp != null && isValidInt(dp, 0, MAX, 20)
                            ? ~~dp + this.e + 1 : null, rm, 20);
                    };
                    /*
                     * Return a string representing the value of this BigNumber in fixed-point notation rounded
                     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
                     * of the FORMAT object (see BigNumber.config).
                     *
                     * FORMAT = {
                     *      decimalSeparator : '.',
                     *      groupSeparator : ',',
                     *      groupSize : 3,
                     *      secondaryGroupSize : 0,
                     *      fractionGroupSeparator : '\xA0',    // non-breaking space
                     *      fractionGroupSize : 0
                     * };
                     *
                     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
                     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
                     *
                     * 'toFormat() decimal places not an integer: {dp}'
                     * 'toFormat() decimal places out of range: {dp}'
                     * 'toFormat() rounding mode not an integer: {rm}'
                     * 'toFormat() rounding mode out of range: {rm}'
                     */
                    P.toFormat = function (dp, rm) {
                        var str = format(this, dp != null && isValidInt(dp, 0, MAX, 21)
                            ? ~~dp + this.e + 1 : null, rm, 21);
                        if (this.c) {
                            var i, arr = str.split('.'), g1 = +FORMAT.groupSize, g2 = +FORMAT.secondaryGroupSize, groupSeparator = FORMAT.groupSeparator, intPart = arr[0], fractionPart = arr[1], isNeg = this.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
                            if (g2)
                                i = g1, g1 = g2, g2 = i, len -= i;
                            if (g1 > 0 && len > 0) {
                                i = len % g1 || g1;
                                intPart = intDigits.substr(0, i);
                                for (; i < len; i += g1) {
                                    intPart += groupSeparator + intDigits.substr(i, g1);
                                }
                                if (g2 > 0)
                                    intPart += groupSeparator + intDigits.slice(i);
                                if (isNeg)
                                    intPart = '-' + intPart;
                            }
                            str = fractionPart
                                ? intPart + FORMAT.decimalSeparator + ((g2 = +FORMAT.fractionGroupSize)
                                    ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'), '$&' + FORMAT.fractionGroupSeparator)
                                    : fractionPart)
                                : intPart;
                        }
                        return str;
                    };
                    /*
                     * Return a string array representing the value of this BigNumber as a simple fraction with
                     * an integer numerator and an integer denominator. The denominator will be a positive
                     * non-zero value less than or equal to the specified maximum denominator. If a maximum
                     * denominator is not specified, the denominator will be the lowest value necessary to
                     * represent the number exactly.
                     *
                     * [md] {number|string|BigNumber} Integer >= 1 and < Infinity. The maximum denominator.
                     *
                     * 'toFraction() max denominator not an integer: {md}'
                     * 'toFraction() max denominator out of range: {md}'
                     */
                    P.toFraction = function (md) {
                        var arr, d0, d2, e, exp, n, n0, q, s, k = ERRORS, x = this, xc = x.c, d = new BigNumber(ONE), n1 = d0 = new BigNumber(ONE), d1 = n0 = new BigNumber(ONE);
                        if (md != null) {
                            ERRORS = false;
                            n = new BigNumber(md);
                            ERRORS = k;
                            if (!(k = n.isInt()) || n.lt(ONE)) {
                                if (ERRORS) {
                                    raise(22, 'max denominator ' + (k ? 'out of range' : 'not an integer'), md);
                                }
                                // ERRORS is false:
                                // If md is a finite non-integer >= 1, round it to an integer and use it.
                                md = !k && n.c && round(n, n.e + 1, 1).gte(ONE) ? n : null;
                            }
                        }
                        if (!xc)
                            return x.toString();
                        s = coeffToString(xc);
                        // Determine initial denominator.
                        // d is a power of 10 and the minimum max denominator that specifies the value exactly.
                        e = d.e = s.length - x.e - 1;
                        d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
                        md = !md || n.cmp(d) > 0 ? (e > 0 ? d : n1) : n;
                        exp = MAX_EXP;
                        MAX_EXP = 1 / 0;
                        n = new BigNumber(s);
                        // n0 = d1 = 0
                        n0.c[0] = 0;
                        for (;;) {
                            q = div(n, d, 0, 1);
                            d2 = d0.plus(q.times(d1));
                            if (d2.cmp(md) == 1)
                                break;
                            d0 = d1;
                            d1 = d2;
                            n1 = n0.plus(q.times(d2 = n1));
                            n0 = d2;
                            d = n.minus(q.times(d2 = d));
                            n = d2;
                        }
                        d2 = div(md.minus(d0), d1, 0, 1);
                        n0 = n0.plus(d2.times(n1));
                        d0 = d0.plus(d2.times(d1));
                        n0.s = n1.s = x.s;
                        e *= 2;
                        // Determine which fraction is closer to x, n0/d0 or n1/d1
                        arr = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().cmp(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1
                            ? [n1.toString(), d1.toString()]
                            : [n0.toString(), d0.toString()];
                        MAX_EXP = exp;
                        return arr;
                    };
                    /*
                     * Return the value of this BigNumber converted to a number primitive.
                     */
                    P.toNumber = function () {
                        var x = this;
                        // Ensure zero has correct sign.
                        return +x || (x.s ? x.s * 0 : NaN);
                    };
                    /*
                     * Return a BigNumber whose value is the value of this BigNumber raised to the power n.
                     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
                     * If POW_PRECISION is not 0, round to POW_PRECISION using ROUNDING_MODE.
                     *
                     * n {number} Integer, -9007199254740992 to 9007199254740992 inclusive.
                     * (Performs 54 loop iterations for n of 9007199254740992.)
                     *
                     * 'pow() exponent not an integer: {n}'
                     * 'pow() exponent out of range: {n}'
                     */
                    P.toPower = P.pow = function (n) {
                        var k, y, i = mathfloor(n < 0 ? -n : +n), x = this;
                        // Pass ±Infinity to Math.pow if exponent is out of range.
                        if (!isValidInt(n, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 23, 'exponent') &&
                            (!isFinite(n) || i > MAX_SAFE_INTEGER && (n /= 0) ||
                                parseFloat(n) != n && !(n = NaN))) {
                            return new BigNumber(Math.pow(+x, n));
                        }
                        // Truncating each coefficient array to a length of k after each multiplication equates
                        // to truncating significant digits to POW_PRECISION + [28, 41], i.e. there will be a
                        // minimum of 28 guard digits retained. (Using + 1.5 would give [9, 21] guard digits.)
                        k = POW_PRECISION ? mathceil(POW_PRECISION / LOG_BASE + 2) : 0;
                        y = new BigNumber(ONE);
                        for (;;) {
                            if (i % 2) {
                                y = y.times(x);
                                if (!y.c)
                                    break;
                                if (k && y.c.length > k)
                                    y.c.length = k;
                            }
                            i = mathfloor(i / 2);
                            if (!i)
                                break;
                            x = x.times(x);
                            if (k && x.c && x.c.length > k)
                                x.c.length = k;
                        }
                        if (n < 0)
                            y = ONE.div(y);
                        return k ? round(y, POW_PRECISION, ROUNDING_MODE) : y;
                    };
                    /*
                     * Return a string representing the value of this BigNumber rounded to sd significant digits
                     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
                     * necessary to represent the integer part of the value in fixed-point notation, then use
                     * exponential notation.
                     *
                     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
                     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
                     *
                     * 'toPrecision() precision not an integer: {sd}'
                     * 'toPrecision() precision out of range: {sd}'
                     * 'toPrecision() rounding mode not an integer: {rm}'
                     * 'toPrecision() rounding mode out of range: {rm}'
                     */
                    P.toPrecision = function (sd, rm) {
                        return format(this, sd != null && isValidInt(sd, 1, MAX, 24, 'precision')
                            ? sd | 0 : null, rm, 24);
                    };
                    /*
                     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
                     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
                     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
                     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
                     * TO_EXP_NEG, return exponential notation.
                     *
                     * [b] {number} Integer, 2 to 64 inclusive.
                     *
                     * 'toString() base not an integer: {b}'
                     * 'toString() base out of range: {b}'
                     */
                    P.toString = function (b) {
                        var str, n = this, s = n.s, e = n.e;
                        // Infinity or NaN?
                        if (e === null) {
                            if (s) {
                                str = 'Infinity';
                                if (s < 0)
                                    str = '-' + str;
                            }
                            else {
                                str = 'NaN';
                            }
                        }
                        else {
                            str = coeffToString(n.c);
                            if (b == null || !isValidInt(b, 2, 64, 25, 'base')) {
                                str = e <= TO_EXP_NEG || e >= TO_EXP_POS
                                    ? toExponential(str, e)
                                    : toFixedPoint(str, e);
                            }
                            else {
                                str = convertBase(toFixedPoint(str, e), b | 0, 10, s);
                            }
                            if (s < 0 && n.c[0])
                                str = '-' + str;
                        }
                        return str;
                    };
                    /*
                     * Return a new BigNumber whose value is the value of this BigNumber truncated to a whole
                     * number.
                     */
                    P.truncated = P.trunc = function () {
                        return round(new BigNumber(this), this.e + 1, 1);
                    };
                    /*
                     * Return as toString, but do not accept a base argument.
                     */
                    P.valueOf = P.toJSON = function () {
                        return this.toString();
                    };
                    // Aliases for BigDecimal methods.
                    //P.add = P.plus;         // P.add included above
                    //P.subtract = P.minus;   // P.sub included above
                    //P.multiply = P.times;   // P.mul included above
                    //P.divide = P.div;
                    //P.remainder = P.mod;
                    //P.compareTo = P.cmp;
                    //P.negate = P.neg;
                    if (configObj != null)
                        BigNumber.config(configObj);
                    return BigNumber;
                }
                // PRIVATE HELPER FUNCTIONS
                function bitFloor(n) {
                    var i = n | 0;
                    return n > 0 || n === i ? i : i - 1;
                }
                // Return a coefficient array as a string of base 10 digits.
                function coeffToString(a) {
                    var s, z, i = 1, j = a.length, r = a[0] + '';
                    for (; i < j;) {
                        s = a[i++] + '';
                        z = LOG_BASE - s.length;
                        for (; z--; s = '0' + s)
                            ;
                        r += s;
                    }
                    // Determine trailing zeros.
                    for (j = r.length; r.charCodeAt(--j) === 48;)
                        ;
                    return r.slice(0, j + 1 || 1);
                }
                // Compare the value of BigNumbers x and y.
                function compare(x, y) {
                    var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
                    // Either NaN?
                    if (!i || !j)
                        return null;
                    a = xc && !xc[0];
                    b = yc && !yc[0];
                    // Either zero?
                    if (a || b)
                        return a ? b ? 0 : -j : i;
                    // Signs differ?
                    if (i != j)
                        return i;
                    a = i < 0;
                    b = k == l;
                    // Either Infinity?
                    if (!xc || !yc)
                        return b ? 0 : !xc ^ a ? 1 : -1;
                    // Compare exponents.
                    if (!b)
                        return k > l ^ a ? 1 : -1;
                    j = (k = xc.length) < (l = yc.length) ? k : l;
                    // Compare digit by digit.
                    for (i = 0; i < j; i++)
                        if (xc[i] != yc[i])
                            return xc[i] > yc[i] ^ a ? 1 : -1;
                    // Compare lengths.
                    return k == l ? 0 : k > l ^ a ? 1 : -1;
                }
                /*
                 * Return true if n is a valid number in range, otherwise false.
                 * Use for argument validation when ERRORS is false.
                 * Note: parseInt('1e+1') == 1 but parseFloat('1e+1') == 10.
                 */
                function intValidatorNoErrors(n, min, max) {
                    return (n = truncate(n)) >= min && n <= max;
                }
                function isArray(obj) {
                    return Object.prototype.toString.call(obj) == '[object Array]';
                }
                /*
                 * Convert string of baseIn to an array of numbers of baseOut.
                 * Eg. convertBase('255', 10, 16) returns [15, 15].
                 * Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
                 */
                function toBaseOut(str, baseIn, baseOut) {
                    var j, arr = [0], arrL, i = 0, len = str.length;
                    for (; i < len;) {
                        for (arrL = arr.length; arrL--; arr[arrL] *= baseIn)
                            ;
                        arr[j = 0] += ALPHABET.indexOf(str.charAt(i++));
                        for (; j < arr.length; j++) {
                            if (arr[j] > baseOut - 1) {
                                if (arr[j + 1] == null)
                                    arr[j + 1] = 0;
                                arr[j + 1] += arr[j] / baseOut | 0;
                                arr[j] %= baseOut;
                            }
                        }
                    }
                    return arr.reverse();
                }
                function toExponential(str, e) {
                    return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
                        (e < 0 ? 'e' : 'e+') + e;
                }
                function toFixedPoint(str, e) {
                    var len, z;
                    // Negative exponent?
                    if (e < 0) {
                        // Prepend zeros.
                        for (z = '0.'; ++e; z += '0')
                            ;
                        str = z + str;
                    }
                    else {
                        len = str.length;
                        // Append zeros.
                        if (++e > len) {
                            for (z = '0', e -= len; --e; z += '0')
                                ;
                            str += z;
                        }
                        else if (e < len) {
                            str = str.slice(0, e) + '.' + str.slice(e);
                        }
                    }
                    return str;
                }
                function truncate(n) {
                    n = parseFloat(n);
                    return n < 0 ? mathceil(n) : mathfloor(n);
                }
                // EXPORT
                BigNumber = another();
                // AMD.
                if (typeof define == 'function' && define.amd) {
                    define(function () { return BigNumber; });
                }
                else if (typeof module != 'undefined' && module.exports) {
                    module.exports = BigNumber;
                    if (!crypto)
                        try {
                            crypto = require('crypto');
                        }
                        catch (e) { }
                }
                else {
                    global.BigNumber = BigNumber;
                }
            })(this);
        }, { "crypto": 46 }], "web3": [function (require, module, exports) {
            var web3 = require('./lib/web3');
            var namereg = require('./lib/web3/namereg');
            web3.providers.HttpProvider = require('./lib/web3/httpprovider');
            web3.providers.IpcProvider = require('./lib/web3/ipcprovider');
            web3.eth.contract = require('./lib/web3/contract');
            web3.eth.namereg = namereg.namereg;
            web3.eth.ibanNamereg = namereg.ibanNamereg;
            web3.eth.sendIBANTransaction = require('./lib/web3/transfer');
            web3.eth.iban = require('./lib/web3/iban');
            // dont override global variable
            if (typeof window !== 'undefined' && typeof window.web3 === 'undefined') {
                window.web3 = web3;
            }
            module.exports = web3;
        }, { "./lib/web3": 22, "./lib/web3/contract": 25, "./lib/web3/httpprovider": 31, "./lib/web3/iban": 32, "./lib/web3/ipcprovider": 33, "./lib/web3/namereg": 41, "./lib/web3/transfer": 45 }]
}, {}, ["web3"]);




// vim:ts=4:sts=4:sw=4:
/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

(function (definition) {
 "use strict";

 // This file will function properly as a <script> tag, or a module
 // using CommonJS and NodeJS or RequireJS module formats.  In
 // Common/Node/RequireJS, the module exports the Q API and when
 // executed as a simple <script>, it creates a Q global instead.

 // Montage Require
 if (typeof bootstrap === "function") {
  bootstrap("promise", definition);

  // CommonJS
 } else if (typeof exports === "object" && typeof module === "object") {
  module.exports = definition();

  // RequireJS
 } else if (typeof define === "function" && define.amd) {
  define(definition);

  // SES (Secure EcmaScript)
 } else if (typeof ses !== "undefined") {
  if (!ses.ok()) {
   return;
  } else {
   ses.makeQ = definition;
  }

  // <script>
 } else if (typeof window !== "undefined" || typeof self !== "undefined") {
  // Prefer window over self for add-on scripts. Use self for
  // non-windowed contexts.
  var global = typeof window !== "undefined" ? window : self;

  // Get the `window` object, save the previous Q global
  // and initialize Q as a global.
  var previousQ = global.Q;
  global.Q = definition();

  // Add a noConflict function so Q can be removed from the
  // global namespace.
  global.Q.noConflict = function () {
   global.Q = previousQ;
   return this;
  };

 } else {
  throw new Error("This environment was not anticipated by Q. Please file a bug.");
 }

})(function () {
 "use strict";

 var hasStacks = false;
 try {
  throw new Error();
 } catch (e) {
  hasStacks = !!e.stack;
 }

 // All code after this point will be filtered from stack traces reported
 // by Q.
 var qStartingLine = captureLine();
 var qFileName;

 // shims

 // used for fallback in "allResolved"
 var noop = function () { };

 // Use the fastest possible means to execute a task in a future turn
 // of the event loop.
 var nextTick = (function () {
  // linked list of tasks (single, with head node)
  var head = { task: void 0, next: null };
  var tail = head;
  var flushing = false;
  var requestTick = void 0;
  var isNodeJS = false;
  // queue for late tasks, used by unhandled rejection tracking
  var laterQueue = [];

  function flush() {
   /* jshint loopfunc: true */
   var task, domain;

   while (head.next) {
    head = head.next;
    task = head.task;
    head.task = void 0;
    domain = head.domain;

    if (domain) {
     head.domain = void 0;
     domain.enter();
    }
    runSingle(task, domain);

   }
   while (laterQueue.length) {
    task = laterQueue.pop();
    runSingle(task);
   }
   flushing = false;
  }
  // runs a single function in the async queue
  function runSingle(task, domain) {
   try {
    task();

   } catch (e) {
    if (isNodeJS) {
     // In node, uncaught exceptions are considered fatal errors.
     // Re-throw them synchronously to interrupt flushing!

     // Ensure continuation if the uncaught exception is suppressed
     // listening "uncaughtException" events (as domains does).
     // Continue in next event to avoid tick recursion.
     if (domain) {
      domain.exit();
     }
     setTimeout(flush, 0);
     if (domain) {
      domain.enter();
     }

     throw e;

    } else {
     // In browsers, uncaught exceptions are not fatal.
     // Re-throw them asynchronously to avoid slow-downs.
     setTimeout(function () {
      throw e;
     }, 0);
    }
   }

   if (domain) {
    domain.exit();
   }
  }

  nextTick = function (task) {
   tail = tail.next = {
    task: task,
    domain: isNodeJS && process.domain,
    next: null
   };

   if (!flushing) {
    flushing = true;
    requestTick();
   }
  };

  if (typeof process === "object" &&
      process.toString() === "[object process]" && process.nextTick) {
   // Ensure Q is in a real Node environment, with a `process.nextTick`.
   // To see through fake Node environments:
   // * Mocha test runner - exposes a `process` global without a `nextTick`
   // * Browserify - exposes a `process.nexTick` function that uses
   //   `setTimeout`. In this case `setImmediate` is preferred because
   //    it is faster. Browserify's `process.toString()` yields
   //   "[object Object]", while in a real Node environment
   //   `process.nextTick()` yields "[object process]".
   isNodeJS = true;

   requestTick = function () {
    process.nextTick(flush);
   };

  } else if (typeof setImmediate === "function") {
   // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
   if (typeof window !== "undefined") {
    requestTick = setImmediate.bind(window, flush);
   } else {
    requestTick = function () {
     setImmediate(flush);
    };
   }

  } else if (typeof MessageChannel !== "undefined") {
   // modern browsers
   // http://www.nonblocking.io/2011/06/windownexttick.html
   var channel = new MessageChannel();
   // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
   // working message ports the first time a page loads.
   channel.port1.onmessage = function () {
    requestTick = requestPortTick;
    channel.port1.onmessage = flush;
    flush();
   };
   var requestPortTick = function () {
    // Opera requires us to provide a message payload, regardless of
    // whether we use it.
    channel.port2.postMessage(0);
   };
   requestTick = function () {
    setTimeout(flush, 0);
    requestPortTick();
   };

  } else {
   // old browsers
   requestTick = function () {
    setTimeout(flush, 0);
   };
  }
  // runs a task after all other tasks have been run
  // this is useful for unhandled rejection tracking that needs to happen
  // after all `then`d tasks have been run.
  nextTick.runAfter = function (task) {
   laterQueue.push(task);
   if (!flushing) {
    flushing = true;
    requestTick();
   }
  };
  return nextTick;
 })();

 // Attempt to make generics safe in the face of downstream
 // modifications.
 // There is no situation where this is necessary.
 // If you need a security guarantee, these primordials need to be
 // deeply frozen anyway, and if you don’t need a security guarantee,
 // this is just plain paranoid.
 // However, this **might** have the nice side-effect of reducing the size of
 // the minified code by reducing x.call() to merely x()
 // See Mark Miller’s explanation of what this does.
 // http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
 var call = Function.call;
 function uncurryThis(f) {
  return function () {
   return call.apply(f, arguments);
  };
 }
 // This is equivalent, but slower:
 // uncurryThis = Function_bind.bind(Function_bind.call);
 // http://jsperf.com/uncurrythis

 var array_slice = uncurryThis(Array.prototype.slice);

 var array_reduce = uncurryThis(
     Array.prototype.reduce || function (callback, basis) {
      var index = 0,
          length = this.length;
      // concerning the initial value, if one is not provided
      if (arguments.length === 1) {
       // seek to the first value in the array, accounting
       // for the possibility that is is a sparse array
       do {
        if (index in this) {
         basis = this[index++];
         break;
        }
        if (++index >= length) {
         throw new TypeError();
        }
       } while (1);
      }
      // reduce
      for (; index < length; index++) {
       // account for the possibility that the array is sparse
       if (index in this) {
        basis = callback(basis, this[index], index);
       }
      }
      return basis;
     }
 );

 var array_indexOf = uncurryThis(
     Array.prototype.indexOf || function (value) {
      // not a very good shim, but good enough for our one use of it
      for (var i = 0; i < this.length; i++) {
       if (this[i] === value) {
        return i;
       }
      }
      return -1;
     }
 );

 var array_map = uncurryThis(
     Array.prototype.map || function (callback, thisp) {
      var self = this;
      var collect = [];
      array_reduce(self, function (undefined, value, index) {
       collect.push(callback.call(thisp, value, index, self));
      }, void 0);
      return collect;
     }
 );

 var object_create = Object.create || function (prototype) {
  function Type() { }
  Type.prototype = prototype;
  return new Type();
 };

 var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

 var object_keys = Object.keys || function (object) {
  var keys = [];
  for (var key in object) {
   if (object_hasOwnProperty(object, key)) {
    keys.push(key);
   }
  }
  return keys;
 };

 var object_toString = uncurryThis(Object.prototype.toString);

 function isObject(value) {
  return value === Object(value);
 }

 // generator related shims

 // FIXME: Remove this function once ES6 generators are in SpiderMonkey.
 function isStopIteration(exception) {
  return (
      object_toString(exception) === "[object StopIteration]" ||
      exception instanceof QReturnValue
  );
 }

 // FIXME: Remove this helper and Q.return once ES6 generators are in
 // SpiderMonkey.
 var QReturnValue;
 if (typeof ReturnValue !== "undefined") {
  QReturnValue = ReturnValue;
 } else {
  QReturnValue = function (value) {
   this.value = value;
  };
 }

 // long stack traces

 var STACK_JUMP_SEPARATOR = "From previous event:";

 function makeStackTraceLong(error, promise) {
  // If possible, transform the error stack trace by removing Node and Q
  // cruft, then concatenating with the stack trace of `promise`. See #57.
  if (hasStacks &&
      promise.stack &&
      typeof error === "object" &&
      error !== null &&
      error.stack &&
      error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
  ) {
   var stacks = [];
   for (var p = promise; !!p; p = p.source) {
    if (p.stack) {
     stacks.unshift(p.stack);
    }
   }
   stacks.unshift(error.stack);

   var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
   error.stack = filterStackString(concatedStacks);
  }
 }

 function filterStackString(stackString) {
  var lines = stackString.split("\n");
  var desiredLines = [];
  for (var i = 0; i < lines.length; ++i) {
   var line = lines[i];

   if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
    desiredLines.push(line);
   }
  }
  return desiredLines.join("\n");
 }

 function isNodeFrame(stackLine) {
  return stackLine.indexOf("(module.js:") !== -1 ||
         stackLine.indexOf("(node.js:") !== -1;
 }

 function getFileNameAndLineNumber(stackLine) {
  // Named functions: "at functionName (filename:lineNumber:columnNumber)"
  // In IE10 function name can have spaces ("Anonymous function") O_o
  var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
  if (attempt1) {
   return [attempt1[1], Number(attempt1[2])];
  }

  // Anonymous functions: "at filename:lineNumber:columnNumber"
  var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
  if (attempt2) {
   return [attempt2[1], Number(attempt2[2])];
  }

  // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
  var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
  if (attempt3) {
   return [attempt3[1], Number(attempt3[2])];
  }
 }

 function isInternalFrame(stackLine) {
  var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

  if (!fileNameAndLineNumber) {
   return false;
  }

  var fileName = fileNameAndLineNumber[0];
  var lineNumber = fileNameAndLineNumber[1];

  return fileName === qFileName &&
      lineNumber >= qStartingLine &&
      lineNumber <= qEndingLine;
 }

 // discover own file name and line number range for filtering stack
 // traces
 function captureLine() {
  if (!hasStacks) {
   return;
  }

  try {
   throw new Error();
  } catch (e) {
   var lines = e.stack.split("\n");
   var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
   var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
   if (!fileNameAndLineNumber) {
    return;
   }

   qFileName = fileNameAndLineNumber[0];
   return fileNameAndLineNumber[1];
  }
 }

 function deprecate(callback, name, alternative) {
  return function () {
   if (typeof console !== "undefined" &&
       typeof console.warn === "function") {
    console.warn(name + " is deprecated, use " + alternative +
                 " instead.", new Error("").stack);
   }
   return callback.apply(callback, arguments);
  };
 }

 // end of shims
 // beginning of real work

 /**
  * Constructs a promise for an immediate reference, passes promises through, or
  * coerces promises from different systems.
  * @param value immediate reference or promise
  */
 function Q(value) {
  // If the object is already a Promise, return it directly.  This enables
  // the resolve function to both be used to created references from objects,
  // but to tolerably coerce non-promises to promises.
  if (value instanceof Promise) {
   return value;
  }

  // assimilate thenables
  if (isPromiseAlike(value)) {
   return coerce(value);
  } else {
   return fulfill(value);
  }
 }
 Q.resolve = Q;

 /**
  * Performs a task in a future turn of the event loop.
  * @param {Function} task
  */
 Q.nextTick = nextTick;

 /**
  * Controls whether or not long stack traces will be on
  */
 Q.longStackSupport = false;

 // enable long stacks if Q_DEBUG is set
 if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
  Q.longStackSupport = true;
 }

 /**
  * Constructs a {promise, resolve, reject} object.
  *
  * `resolve` is a callback to invoke with a more resolved value for the
  * promise. To fulfill the promise, invoke `resolve` with any value that is
  * not a thenable. To reject the promise, invoke `resolve` with a rejected
  * thenable, or invoke `reject` with the reason directly. To resolve the
  * promise to another thenable, thus putting it in the same state, invoke
  * `resolve` with that other thenable.
  */
 Q.defer = defer;
 function defer() {
  // if "messages" is an "Array", that indicates that the promise has not yet
  // been resolved.  If it is "undefined", it has been resolved.  Each
  // element of the messages array is itself an array of complete arguments to
  // forward to the resolved promise.  We coerce the resolution value to a
  // promise using the `resolve` function because it handles both fully
  // non-thenable values and other thenables gracefully.
  var messages = [], progressListeners = [], resolvedPromise;

  var deferred = object_create(defer.prototype);
  var promise = object_create(Promise.prototype);

  promise.promiseDispatch = function (resolve, op, operands) {
   var args = array_slice(arguments);
   if (messages) {
    messages.push(args);
    if (op === "when" && operands[1]) { // progress operand
     progressListeners.push(operands[1]);
    }
   } else {
    Q.nextTick(function () {
     resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
    });
   }
  };

  // XXX deprecated
  promise.valueOf = function () {
   if (messages) {
    return promise;
   }
   var nearerValue = nearer(resolvedPromise);
   if (isPromise(nearerValue)) {
    resolvedPromise = nearerValue; // shorten chain
   }
   return nearerValue;
  };

  promise.inspect = function () {
   if (!resolvedPromise) {
    return { state: "pending" };
   }
   return resolvedPromise.inspect();
  };

  if (Q.longStackSupport && hasStacks) {
   try {
    throw new Error();
   } catch (e) {
    // NOTE: don't try to use `Error.captureStackTrace` or transfer the
    // accessor around; that causes memory leaks as per GH-111. Just
    // reify the stack trace as a string ASAP.
    //
    // At the same time, cut off the first line; it's always just
    // "[object Promise]\n", as per the `toString`.
    promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
   }
  }

  // NOTE: we do the checks for `resolvedPromise` in each method, instead of
  // consolidating them into `become`, since otherwise we'd create new
  // promises with the lines `become(whatever(value))`. See e.g. GH-252.

  function become(newPromise) {
   resolvedPromise = newPromise;
   promise.source = newPromise;

   array_reduce(messages, function (undefined, message) {
    Q.nextTick(function () {
     newPromise.promiseDispatch.apply(newPromise, message);
    });
   }, void 0);

   messages = void 0;
   progressListeners = void 0;
  }

  deferred.promise = promise;
  deferred.resolve = function (value) {
   if (resolvedPromise) {
    return;
   }

   become(Q(value));
  };

  deferred.fulfill = function (value) {
   if (resolvedPromise) {
    return;
   }

   become(fulfill(value));
  };
  deferred.reject = function (reason) {
   if (resolvedPromise) {
    return;
   }

   become(reject(reason));
  };
  deferred.notify = function (progress) {
   if (resolvedPromise) {
    return;
   }

   array_reduce(progressListeners, function (undefined, progressListener) {
    Q.nextTick(function () {
     progressListener(progress);
    });
   }, void 0);
  };

  return deferred;
 }

 /**
  * Creates a Node-style callback that will resolve or reject the deferred
  * promise.
  * @returns a nodeback
  */
 defer.prototype.makeNodeResolver = function () {
  var self = this;
  return function (error, value) {
   if (error) {
    self.reject(error);
   } else if (arguments.length > 2) {
    self.resolve(array_slice(arguments, 1));
   } else {
    self.resolve(value);
   }
  };
 };

 /**
  * @param resolver {Function} a function that returns nothing and accepts
  * the resolve, reject, and notify functions for a deferred.
  * @returns a promise that may be resolved with the given resolve and reject
  * functions, or rejected by a thrown exception in resolver
  */
 Q.Promise = promise; // ES6
 Q.promise = promise;
 function promise(resolver) {
  if (typeof resolver !== "function") {
   throw new TypeError("resolver must be a function.");
  }
  var deferred = defer();
  try {
   resolver(deferred.resolve, deferred.reject, deferred.notify);
  } catch (reason) {
   deferred.reject(reason);
  }
  return deferred.promise;
 }

 promise.race = race; // ES6
 promise.all = all; // ES6
 promise.reject = reject; // ES6
 promise.resolve = Q; // ES6

 // XXX experimental.  This method is a way to denote that a local value is
 // serializable and should be immediately dispatched to a remote upon request,
 // instead of passing a reference.
 Q.passByCopy = function (object) {
  //freeze(object);
  //passByCopies.set(object, true);
  return object;
 };

 Promise.prototype.passByCopy = function () {
  //freeze(object);
  //passByCopies.set(object, true);
  return this;
 };

 /**
  * If two promises eventually fulfill to the same value, promises that value,
  * but otherwise rejects.
  * @param x {Any*}
  * @param y {Any*}
  * @returns {Any*} a promise for x and y if they are the same, but a rejection
  * otherwise.
  *
  */
 Q.join = function (x, y) {
  return Q(x).join(y);
 };

 Promise.prototype.join = function (that) {
  return Q([this, that]).spread(function (x, y) {
   if (x === y) {
    // TODO: "===" should be Object.is or equiv
    return x;
   } else {
    throw new Error("Can't join: not the same: " + x + " " + y);
   }
  });
 };

 /**
  * Returns a promise for the first of an array of promises to become settled.
  * @param answers {Array[Any*]} promises to race
  * @returns {Any*} the first promise to be settled
  */
 Q.race = race;
 function race(answerPs) {
  return promise(function (resolve, reject) {
   // Switch to this once we can assume at least ES5
   // answerPs.forEach(function (answerP) {
   //     Q(answerP).then(resolve, reject);
   // });
   // Use this in the meantime
   for (var i = 0, len = answerPs.length; i < len; i++) {
    Q(answerPs[i]).then(resolve, reject);
   }
  });
 }

 Promise.prototype.race = function () {
  return this.then(Q.race);
 };

 /**
  * Constructs a Promise with a promise descriptor object and optional fallback
  * function.  The descriptor contains methods like when(rejected), get(name),
  * set(name, value), post(name, args), and delete(name), which all
  * return either a value, a promise for a value, or a rejection.  The fallback
  * accepts the operation name, a resolver, and any further arguments that would
  * have been forwarded to the appropriate method above had a method been
  * provided with the proper name.  The API makes no guarantees about the nature
  * of the returned object, apart from that it is usable whereever promises are
  * bought and sold.
  */
 Q.makePromise = Promise;
 function Promise(descriptor, fallback, inspect) {
  if (fallback === void 0) {
   fallback = function (op) {
    return reject(new Error(
        "Promise does not support operation: " + op
    ));
   };
  }
  if (inspect === void 0) {
   inspect = function () {
    return { state: "unknown" };
   };
  }

  var promise = object_create(Promise.prototype);

  promise.promiseDispatch = function (resolve, op, args) {
   var result;
   try {
    if (descriptor[op]) {
     result = descriptor[op].apply(promise, args);
    } else {
     result = fallback.call(promise, op, args);
    }
   } catch (exception) {
    result = reject(exception);
   }
   if (resolve) {
    resolve(result);
   }
  };

  promise.inspect = inspect;

  // XXX deprecated `valueOf` and `exception` support
  if (inspect) {
   var inspected = inspect();
   if (inspected.state === "rejected") {
    promise.exception = inspected.reason;
   }

   promise.valueOf = function () {
    var inspected = inspect();
    if (inspected.state === "pending" ||
        inspected.state === "rejected") {
     return promise;
    }
    return inspected.value;
   };
  }

  return promise;
 }

 Promise.prototype.toString = function () {
  return "[object Promise]";
 };

 Promise.prototype.then = function (fulfilled, rejected, progressed) {
  var self = this;
  var deferred = defer();
  var done = false;   // ensure the untrusted promise makes at most a
  // single call to one of the callbacks

  function _fulfilled(value) {
   try {
    return typeof fulfilled === "function" ? fulfilled(value) : value;
   } catch (exception) {
    return reject(exception);
   }
  }

  function _rejected(exception) {
   if (typeof rejected === "function") {
    makeStackTraceLong(exception, self);
    try {
     return rejected(exception);
    } catch (newException) {
     return reject(newException);
    }
   }
   return reject(exception);
  }

  function _progressed(value) {
   return typeof progressed === "function" ? progressed(value) : value;
  }

  Q.nextTick(function () {
   self.promiseDispatch(function (value) {
    if (done) {
     return;
    }
    done = true;

    deferred.resolve(_fulfilled(value));
   }, "when", [function (exception) {
    if (done) {
     return;
    }
    done = true;

    deferred.resolve(_rejected(exception));
   }]);
  });

  // Progress propagator need to be attached in the current tick.
  self.promiseDispatch(void 0, "when", [void 0, function (value) {
   var newValue;
   var threw = false;
   try {
    newValue = _progressed(value);
   } catch (e) {
    threw = true;
    if (Q.onerror) {
     Q.onerror(e);
    } else {
     throw e;
    }
   }

   if (!threw) {
    deferred.notify(newValue);
   }
  }]);

  return deferred.promise;
 };

 Q.tap = function (promise, callback) {
  return Q(promise).tap(callback);
 };

 /**
  * Works almost like "finally", but not called for rejections.
  * Original resolution value is passed through callback unaffected.
  * Callback may return a promise that will be awaited for.
  * @param {Function} callback
  * @returns {Q.Promise}
  * @example
  * doSomething()
  *   .then(...)
  *   .tap(console.log)
  *   .then(...);
  */
 Promise.prototype.tap = function (callback) {
  callback = Q(callback);

  return this.then(function (value) {
   return callback.fcall(value).thenResolve(value);
  });
 };

 /**
  * Registers an observer on a promise.
  *
  * Guarantees:
  *
  * 1. that fulfilled and rejected will be called only once.
  * 2. that either the fulfilled callback or the rejected callback will be
  *    called, but not both.
  * 3. that fulfilled and rejected will not be called in this turn.
  *
  * @param value      promise or immediate reference to observe
  * @param fulfilled  function to be called with the fulfilled value
  * @param rejected   function to be called with the rejection exception
  * @param progressed function to be called on any progress notifications
  * @return promise for the return value from the invoked callback
  */
 Q.when = when;
 function when(value, fulfilled, rejected, progressed) {
  return Q(value).then(fulfilled, rejected, progressed);
 }

 Promise.prototype.thenResolve = function (value) {
  return this.then(function () { return value; });
 };

 Q.thenResolve = function (promise, value) {
  return Q(promise).thenResolve(value);
 };

 Promise.prototype.thenReject = function (reason) {
  return this.then(function () { throw reason; });
 };

 Q.thenReject = function (promise, reason) {
  return Q(promise).thenReject(reason);
 };

 /**
  * If an object is not a promise, it is as "near" as possible.
  * If a promise is rejected, it is as "near" as possible too.
  * If it’s a fulfilled promise, the fulfillment value is nearer.
  * If it’s a deferred promise and the deferred has been resolved, the
  * resolution is "nearer".
  * @param object
  * @returns most resolved (nearest) form of the object
  */

 // XXX should we re-do this?
 Q.nearer = nearer;
 function nearer(value) {
  if (isPromise(value)) {
   var inspected = value.inspect();
   if (inspected.state === "fulfilled") {
    return inspected.value;
   }
  }
  return value;
 }

 /**
  * @returns whether the given object is a promise.
  * Otherwise it is a fulfilled value.
  */
 Q.isPromise = isPromise;
 function isPromise(object) {
  return object instanceof Promise;
 }

 Q.isPromiseAlike = isPromiseAlike;
 function isPromiseAlike(object) {
  return isObject(object) && typeof object.then === "function";
 }

 /**
  * @returns whether the given object is a pending promise, meaning not
  * fulfilled or rejected.
  */
 Q.isPending = isPending;
 function isPending(object) {
  return isPromise(object) && object.inspect().state === "pending";
 }

 Promise.prototype.isPending = function () {
  return this.inspect().state === "pending";
 };

 /**
  * @returns whether the given object is a value or fulfilled
  * promise.
  */
 Q.isFulfilled = isFulfilled;
 function isFulfilled(object) {
  return !isPromise(object) || object.inspect().state === "fulfilled";
 }

 Promise.prototype.isFulfilled = function () {
  return this.inspect().state === "fulfilled";
 };

 /**
  * @returns whether the given object is a rejected promise.
  */
 Q.isRejected = isRejected;
 function isRejected(object) {
  return isPromise(object) && object.inspect().state === "rejected";
 }

 Promise.prototype.isRejected = function () {
  return this.inspect().state === "rejected";
 };

 //// BEGIN UNHANDLED REJECTION TRACKING

 // This promise library consumes exceptions thrown in handlers so they can be
 // handled by a subsequent promise.  The exceptions get added to this array when
 // they are created, and removed when they are handled.  Note that in ES6 or
 // shimmed environments, this would naturally be a `Set`.
 var unhandledReasons = [];
 var unhandledRejections = [];
 var reportedUnhandledRejections = [];
 var trackUnhandledRejections = true;

 function resetUnhandledRejections() {
  unhandledReasons.length = 0;
  unhandledRejections.length = 0;

  if (!trackUnhandledRejections) {
   trackUnhandledRejections = true;
  }
 }

 function trackRejection(promise, reason) {
  if (!trackUnhandledRejections) {
   return;
  }
  if (typeof process === "object" && typeof process.emit === "function") {
   Q.nextTick.runAfter(function () {
    if (array_indexOf(unhandledRejections, promise) !== -1) {
     process.emit("unhandledRejection", reason, promise);
     reportedUnhandledRejections.push(promise);
    }
   });
  }

  unhandledRejections.push(promise);
  if (reason && typeof reason.stack !== "undefined") {
   unhandledReasons.push(reason.stack);
  } else {
   unhandledReasons.push("(no stack) " + reason);
  }
 }

 function untrackRejection(promise) {
  if (!trackUnhandledRejections) {
   return;
  }

  var at = array_indexOf(unhandledRejections, promise);
  if (at !== -1) {
   if (typeof process === "object" && typeof process.emit === "function") {
    Q.nextTick.runAfter(function () {
     var atReport = array_indexOf(reportedUnhandledRejections, promise);
     if (atReport !== -1) {
      process.emit("rejectionHandled", unhandledReasons[at], promise);
      reportedUnhandledRejections.splice(atReport, 1);
     }
    });
   }
   unhandledRejections.splice(at, 1);
   unhandledReasons.splice(at, 1);
  }
 }

 Q.resetUnhandledRejections = resetUnhandledRejections;

 Q.getUnhandledReasons = function () {
  // Make a copy so that consumers can't interfere with our internal state.
  return unhandledReasons.slice();
 };

 Q.stopUnhandledRejectionTracking = function () {
  resetUnhandledRejections();
  trackUnhandledRejections = false;
 };

 resetUnhandledRejections();

 //// END UNHANDLED REJECTION TRACKING

 /**
  * Constructs a rejected promise.
  * @param reason value describing the failure
  */
 Q.reject = reject;
 function reject(reason) {
  var rejection = Promise({
   "when": function (rejected) {
    // note that the error has been handled
    if (rejected) {
     untrackRejection(this);
    }
    return rejected ? rejected(reason) : this;
   }
  }, function fallback() {
   return this;
  }, function inspect() {
   return { state: "rejected", reason: reason };
  });

  // Note that the reason has not been handled.
  trackRejection(rejection, reason);

  return rejection;
 }

 /**
  * Constructs a fulfilled promise for an immediate reference.
  * @param value immediate reference
  */
 Q.fulfill = fulfill;
 function fulfill(value) {
  return Promise({
   "when": function () {
    return value;
   },
   "get": function (name) {
    return value[name];
   },
   "set": function (name, rhs) {
    value[name] = rhs;
   },
   "delete": function (name) {
    delete value[name];
   },
   "post": function (name, args) {
    // Mark Miller proposes that post with no name should apply a
    // promised function.
    if (name === null || name === void 0) {
     return value.apply(void 0, args);
    } else {
     return value[name].apply(value, args);
    }
   },
   "apply": function (thisp, args) {
    return value.apply(thisp, args);
   },
   "keys": function () {
    return object_keys(value);
   }
  }, void 0, function inspect() {
   return { state: "fulfilled", value: value };
  });
 }

 /**
  * Converts thenables to Q promises.
  * @param promise thenable promise
  * @returns a Q promise
  */
 function coerce(promise) {
  var deferred = defer();
  Q.nextTick(function () {
   try {
    promise.then(deferred.resolve, deferred.reject, deferred.notify);
   } catch (exception) {
    deferred.reject(exception);
   }
  });
  return deferred.promise;
 }

 /**
  * Annotates an object such that it will never be
  * transferred away from this process over any promise
  * communication channel.
  * @param object
  * @returns promise a wrapping of that object that
  * additionally responds to the "isDef" message
  * without a rejection.
  */
 Q.master = master;
 function master(object) {
  return Promise({
   "isDef": function () { }
  }, function fallback(op, args) {
   return dispatch(object, op, args);
  }, function () {
   return Q(object).inspect();
  });
 }

 /**
  * Spreads the values of a promised array of arguments into the
  * fulfillment callback.
  * @param fulfilled callback that receives variadic arguments from the
  * promised array
  * @param rejected callback that receives the exception if the promise
  * is rejected.
  * @returns a promise for the return value or thrown exception of
  * either callback.
  */
 Q.spread = spread;
 function spread(value, fulfilled, rejected) {
  return Q(value).spread(fulfilled, rejected);
 }

 Promise.prototype.spread = function (fulfilled, rejected) {
  return this.all().then(function (array) {
   return fulfilled.apply(void 0, array);
  }, rejected);
 };

 /**
  * The async function is a decorator for generator functions, turning
  * them into asynchronous generators.  Although generators are only part
  * of the newest ECMAScript 6 drafts, this code does not cause syntax
  * errors in older engines.  This code should continue to work and will
  * in fact improve over time as the language improves.
  *
  * ES6 generators are currently part of V8 version 3.19 with the
  * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
  * for longer, but under an older Python-inspired form.  This function
  * works on both kinds of generators.
  *
  * Decorates a generator function such that:
  *  - it may yield promises
  *  - execution will continue when that promise is fulfilled
  *  - the value of the yield expression will be the fulfilled value
  *  - it returns a promise for the return value (when the generator
  *    stops iterating)
  *  - the decorated function returns a promise for the return value
  *    of the generator or the first rejected promise among those
  *    yielded.
  *  - if an error is thrown in the generator, it propagates through
  *    every following yield until it is caught, or until it escapes
  *    the generator function altogether, and is translated into a
  *    rejection for the promise returned by the decorated generator.
  */
 Q.async = async;
 function async(makeGenerator) {
  return function () {
   // when verb is "send", arg is a value
   // when verb is "throw", arg is an exception
   function continuer(verb, arg) {
    var result;

    // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
    // engine that has a deployed base of browsers that support generators.
    // However, SM's generators use the Python-inspired semantics of
    // outdated ES6 drafts.  We would like to support ES6, but we'd also
    // like to make it possible to use generators in deployed browsers, so
    // we also support Python-style generators.  At some point we can remove
    // this block.

    if (typeof StopIteration === "undefined") {
     // ES6 Generators
     try {
      result = generator[verb](arg);
     } catch (exception) {
      return reject(exception);
     }
     if (result.done) {
      return Q(result.value);
     } else {
      return when(result.value, callback, errback);
     }
    } else {
     // SpiderMonkey Generators
     // FIXME: Remove this case when SM does ES6 generators.
     try {
      result = generator[verb](arg);
     } catch (exception) {
      if (isStopIteration(exception)) {
       return Q(exception.value);
      } else {
       return reject(exception);
      }
     }
     return when(result, callback, errback);
    }
   }
   var generator = makeGenerator.apply(this, arguments);
   var callback = continuer.bind(continuer, "next");
   var errback = continuer.bind(continuer, "throw");
   return callback();
  };
 }

 /**
  * The spawn function is a small wrapper around async that immediately
  * calls the generator and also ends the promise chain, so that any
  * unhandled errors are thrown instead of forwarded to the error
  * handler. This is useful because it's extremely common to run
  * generators at the top-level to work with libraries.
  */
 Q.spawn = spawn;
 function spawn(makeGenerator) {
  Q.done(Q.async(makeGenerator)());
 }

 // FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
 /**
  * Throws a ReturnValue exception to stop an asynchronous generator.
  *
  * This interface is a stop-gap measure to support generator return
  * values in older Firefox/SpiderMonkey.  In browsers that support ES6
  * generators like Chromium 29, just use "return" in your generator
  * functions.
  *
  * @param value the return value for the surrounding generator
  * @throws ReturnValue exception with the value.
  * @example
  * // ES6 style
  * Q.async(function* () {
  *      var foo = yield getFooPromise();
  *      var bar = yield getBarPromise();
  *      return foo + bar;
  * })
  * // Older SpiderMonkey style
  * Q.async(function () {
  *      var foo = yield getFooPromise();
  *      var bar = yield getBarPromise();
  *      Q.return(foo + bar);
  * })
  */
 Q["return"] = _return;
 function _return(value) {
  throw new QReturnValue(value);
 }

 /**
  * The promised function decorator ensures that any promise arguments
  * are settled and passed as values (`this` is also settled and passed
  * as a value).  It will also ensure that the result of a function is
  * always a promise.
  *
  * @example
  * var add = Q.promised(function (a, b) {
  *     return a + b;
  * });
  * add(Q(a), Q(B));
  *
  * @param {function} callback The function to decorate
  * @returns {function} a function that has been decorated.
  */
 Q.promised = promised;
 function promised(callback) {
  return function () {
   return spread([this, all(arguments)], function (self, args) {
    return callback.apply(self, args);
   });
  };
 }

 /**
  * sends a message to a value in a future turn
  * @param object* the recipient
  * @param op the name of the message operation, e.g., "when",
  * @param args further arguments to be forwarded to the operation
  * @returns result {Promise} a promise for the result of the operation
  */
 Q.dispatch = dispatch;
 function dispatch(object, op, args) {
  return Q(object).dispatch(op, args);
 }

 Promise.prototype.dispatch = function (op, args) {
  var self = this;
  var deferred = defer();
  Q.nextTick(function () {
   self.promiseDispatch(deferred.resolve, op, args);
  });
  return deferred.promise;
 };

 /**
  * Gets the value of a property in a future turn.
  * @param object    promise or immediate reference for target object
  * @param name      name of property to get
  * @return promise for the property value
  */
 Q.get = function (object, key) {
  return Q(object).dispatch("get", [key]);
 };

 Promise.prototype.get = function (key) {
  return this.dispatch("get", [key]);
 };

 /**
  * Sets the value of a property in a future turn.
  * @param object    promise or immediate reference for object object
  * @param name      name of property to set
  * @param value     new value of property
  * @return promise for the return value
  */
 Q.set = function (object, key, value) {
  return Q(object).dispatch("set", [key, value]);
 };

 Promise.prototype.set = function (key, value) {
  return this.dispatch("set", [key, value]);
 };

 /**
  * Deletes a property in a future turn.
  * @param object    promise or immediate reference for target object
  * @param name      name of property to delete
  * @return promise for the return value
  */
 Q.del = // XXX legacy
 Q["delete"] = function (object, key) {
  return Q(object).dispatch("delete", [key]);
 };

 Promise.prototype.del = // XXX legacy
 Promise.prototype["delete"] = function (key) {
  return this.dispatch("delete", [key]);
 };

 /**
  * Invokes a method in a future turn.
  * @param object    promise or immediate reference for target object
  * @param name      name of method to invoke
  * @param value     a value to post, typically an array of
  *                  invocation arguments for promises that
  *                  are ultimately backed with `resolve` values,
  *                  as opposed to those backed with URLs
  *                  wherein the posted value can be any
  *                  JSON serializable object.
  * @return promise for the return value
  */
 // bound locally because it is used by other methods
 Q.mapply = // XXX As proposed by "Redsandro"
 Q.post = function (object, name, args) {
  return Q(object).dispatch("post", [name, args]);
 };

 Promise.prototype.mapply = // XXX As proposed by "Redsandro"
 Promise.prototype.post = function (name, args) {
  return this.dispatch("post", [name, args]);
 };

 /**
  * Invokes a method in a future turn.
  * @param object    promise or immediate reference for target object
  * @param name      name of method to invoke
  * @param ...args   array of invocation arguments
  * @return promise for the return value
  */
 Q.send = // XXX Mark Miller's proposed parlance
 Q.mcall = // XXX As proposed by "Redsandro"
 Q.invoke = function (object, name /*...args*/) {
  return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
 };

 Promise.prototype.send = // XXX Mark Miller's proposed parlance
 Promise.prototype.mcall = // XXX As proposed by "Redsandro"
 Promise.prototype.invoke = function (name /*...args*/) {
  return this.dispatch("post", [name, array_slice(arguments, 1)]);
 };

 /**
  * Applies the promised function in a future turn.
  * @param object    promise or immediate reference for target function
  * @param args      array of application arguments
  */
 Q.fapply = function (object, args) {
  return Q(object).dispatch("apply", [void 0, args]);
 };

 Promise.prototype.fapply = function (args) {
  return this.dispatch("apply", [void 0, args]);
 };

 /**
  * Calls the promised function in a future turn.
  * @param object    promise or immediate reference for target function
  * @param ...args   array of application arguments
  */
 Q["try"] =
 Q.fcall = function (object /* ...args*/) {
  return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
 };

 Promise.prototype.fcall = function (/*...args*/) {
  return this.dispatch("apply", [void 0, array_slice(arguments)]);
 };

 /**
  * Binds the promised function, transforming return values into a fulfilled
  * promise and thrown errors into a rejected one.
  * @param object    promise or immediate reference for target function
  * @param ...args   array of application arguments
  */
 Q.fbind = function (object /*...args*/) {
  var promise = Q(object);
  var args = array_slice(arguments, 1);
  return function fbound() {
   return promise.dispatch("apply", [
       this,
       args.concat(array_slice(arguments))
   ]);
  };
 };
 Promise.prototype.fbind = function (/*...args*/) {
  var promise = this;
  var args = array_slice(arguments);
  return function fbound() {
   return promise.dispatch("apply", [
       this,
       args.concat(array_slice(arguments))
   ]);
  };
 };

 /**
  * Requests the names of the owned properties of a promised
  * object in a future turn.
  * @param object    promise or immediate reference for target object
  * @return promise for the keys of the eventually settled object
  */
 Q.keys = function (object) {
  return Q(object).dispatch("keys", []);
 };

 Promise.prototype.keys = function () {
  return this.dispatch("keys", []);
 };

 /**
  * Turns an array of promises into a promise for an array.  If any of
  * the promises gets rejected, the whole array is rejected immediately.
  * @param {Array*} an array (or promise for an array) of values (or
  * promises for values)
  * @returns a promise for an array of the corresponding values
  */
 // By Mark Miller
 // http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
 Q.all = all;
 function all(promises) {
  return when(promises, function (promises) {
   var pendingCount = 0;
   var deferred = defer();
   array_reduce(promises, function (undefined, promise, index) {
    var snapshot;
    if (
        isPromise(promise) &&
        (snapshot = promise.inspect()).state === "fulfilled"
    ) {
     promises[index] = snapshot.value;
    } else {
     ++pendingCount;
     when(
         promise,
         function (value) {
          promises[index] = value;
          if (--pendingCount === 0) {
           deferred.resolve(promises);
          }
         },
         deferred.reject,
         function (progress) {
          deferred.notify({ index: index, value: progress });
         }
     );
    }
   }, void 0);
   if (pendingCount === 0) {
    deferred.resolve(promises);
   }
   return deferred.promise;
  });
 }

 Promise.prototype.all = function () {
  return all(this);
 };

 /**
  * Returns the first resolved promise of an array. Prior rejected promises are
  * ignored.  Rejects only if all promises are rejected.
  * @param {Array*} an array containing values or promises for values
  * @returns a promise fulfilled with the value of the first resolved promise,
  * or a rejected promise if all promises are rejected.
  */
 Q.any = any;

 function any(promises) {
  if (promises.length === 0) {
   return Q.resolve();
  }

  var deferred = Q.defer();
  var pendingCount = 0;
  array_reduce(promises, function (prev, current, index) {
   var promise = promises[index];

   pendingCount++;

   when(promise, onFulfilled, onRejected, onProgress);
   function onFulfilled(result) {
    deferred.resolve(result);
   }
   function onRejected() {
    pendingCount--;
    if (pendingCount === 0) {
     deferred.reject(new Error(
         "Can't get fulfillment value from any promise, all " +
         "promises were rejected."
     ));
    }
   }
   function onProgress(progress) {
    deferred.notify({
     index: index,
     value: progress
    });
   }
  }, undefined);

  return deferred.promise;
 }

 Promise.prototype.any = function () {
  return any(this);
 };

 /**
  * Waits for all promises to be settled, either fulfilled or
  * rejected.  This is distinct from `all` since that would stop
  * waiting at the first rejection.  The promise returned by
  * `allResolved` will never be rejected.
  * @param promises a promise for an array (or an array) of promises
  * (or values)
  * @return a promise for an array of promises
  */
 Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
 function allResolved(promises) {
  return when(promises, function (promises) {
   promises = array_map(promises, Q);
   return when(all(array_map(promises, function (promise) {
    return when(promise, noop, noop);
   })), function () {
    return promises;
   });
  });
 }

 Promise.prototype.allResolved = function () {
  return allResolved(this);
 };

 /**
  * @see Promise#allSettled
  */
 Q.allSettled = allSettled;
 function allSettled(promises) {
  return Q(promises).allSettled();
 }

 /**
  * Turns an array of promises into a promise for an array of their states (as
  * returned by `inspect`) when they have all settled.
  * @param {Array[Any*]} values an array (or promise for an array) of values (or
  * promises for values)
  * @returns {Array[State]} an array of states for the respective values.
  */
 Promise.prototype.allSettled = function () {
  return this.then(function (promises) {
   return all(array_map(promises, function (promise) {
    promise = Q(promise);
    function regardless() {
     return promise.inspect();
    }
    return promise.then(regardless, regardless);
   }));
  });
 };

 /**
  * Captures the failure of a promise, giving an oportunity to recover
  * with a callback.  If the given promise is fulfilled, the returned
  * promise is fulfilled.
  * @param {Any*} promise for something
  * @param {Function} callback to fulfill the returned promise if the
  * given promise is rejected
  * @returns a promise for the return value of the callback
  */
 Q.fail = // XXX legacy
 Q["catch"] = function (object, rejected) {
  return Q(object).then(void 0, rejected);
 };

 Promise.prototype.fail = // XXX legacy
 Promise.prototype["catch"] = function (rejected) {
  return this.then(void 0, rejected);
 };

 /**
  * Attaches a listener that can respond to progress notifications from a
  * promise's originating deferred. This listener receives the exact arguments
  * passed to ``deferred.notify``.
  * @param {Any*} promise for something
  * @param {Function} callback to receive any progress notifications
  * @returns the given promise, unchanged
  */
 Q.progress = progress;
 function progress(object, progressed) {
  return Q(object).then(void 0, void 0, progressed);
 }

 Promise.prototype.progress = function (progressed) {
  return this.then(void 0, void 0, progressed);
 };

 /**
  * Provides an opportunity to observe the settling of a promise,
  * regardless of whether the promise is fulfilled or rejected.  Forwards
  * the resolution to the returned promise when the callback is done.
  * The callback can return a promise to defer completion.
  * @param {Any*} promise
  * @param {Function} callback to observe the resolution of the given
  * promise, takes no arguments.
  * @returns a promise for the resolution of the given promise when
  * ``fin`` is done.
  */
 Q.fin = // XXX legacy
 Q["finally"] = function (object, callback) {
  return Q(object)["finally"](callback);
 };

 Promise.prototype.fin = // XXX legacy
 Promise.prototype["finally"] = function (callback) {
  callback = Q(callback);
  return this.then(function (value) {
   return callback.fcall().then(function () {
    return value;
   });
  }, function (reason) {
   // TODO attempt to recycle the rejection with "this".
   return callback.fcall().then(function () {
    throw reason;
   });
  });
 };

 /**
  * Terminates a chain of promises, forcing rejections to be
  * thrown as exceptions.
  * @param {Any*} promise at the end of a chain of promises
  * @returns nothing
  */
 Q.done = function (object, fulfilled, rejected, progress) {
  return Q(object).done(fulfilled, rejected, progress);
 };

 Promise.prototype.done = function (fulfilled, rejected, progress) {
  var onUnhandledError = function (error) {
   // forward to a future turn so that ``when``
   // does not catch it and turn it into a rejection.
   Q.nextTick(function () {
    makeStackTraceLong(error, promise);
    if (Q.onerror) {
     Q.onerror(error);
    } else {
     throw error;
    }
   });
  };

  // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
  var promise = fulfilled || rejected || progress ?
      this.then(fulfilled, rejected, progress) :
      this;

  if (typeof process === "object" && process && process.domain) {
   onUnhandledError = process.domain.bind(onUnhandledError);
  }

  promise.then(void 0, onUnhandledError);
 };

 /**
  * Causes a promise to be rejected if it does not get fulfilled before
  * some milliseconds time out.
  * @param {Any*} promise
  * @param {Number} milliseconds timeout
  * @param {Any*} custom error message or Error object (optional)
  * @returns a promise for the resolution of the given promise if it is
  * fulfilled before the timeout, otherwise rejected.
  */
 Q.timeout = function (object, ms, error) {
  return Q(object).timeout(ms, error);
 };

 Promise.prototype.timeout = function (ms, error) {
  var deferred = defer();
  var timeoutId = setTimeout(function () {
   if (!error || "string" === typeof error) {
    error = new Error(error || "Timed out after " + ms + " ms");
    error.code = "ETIMEDOUT";
   }
   deferred.reject(error);
  }, ms);

  this.then(function (value) {
   clearTimeout(timeoutId);
   deferred.resolve(value);
  }, function (exception) {
   clearTimeout(timeoutId);
   deferred.reject(exception);
  }, deferred.notify);

  return deferred.promise;
 };

 /**
  * Returns a promise for the given value (or promised value), some
  * milliseconds after it resolved. Passes rejections immediately.
  * @param {Any*} promise
  * @param {Number} milliseconds
  * @returns a promise for the resolution of the given promise after milliseconds
  * time has elapsed since the resolution of the given promise.
  * If the given promise rejects, that is passed immediately.
  */
 Q.delay = function (object, timeout) {
  if (timeout === void 0) {
   timeout = object;
   object = void 0;
  }
  return Q(object).delay(timeout);
 };

 Promise.prototype.delay = function (timeout) {
  return this.then(function (value) {
   var deferred = defer();
   setTimeout(function () {
    deferred.resolve(value);
   }, timeout);
   return deferred.promise;
  });
 };

 /**
  * Passes a continuation to a Node function, which is called with the given
  * arguments provided as an array, and returns a promise.
  *
  *      Q.nfapply(FS.readFile, [__filename])
  *      .then(function (content) {
  *      })
  *
  */
 Q.nfapply = function (callback, args) {
  return Q(callback).nfapply(args);
 };

 Promise.prototype.nfapply = function (args) {
  var deferred = defer();
  var nodeArgs = array_slice(args);
  nodeArgs.push(deferred.makeNodeResolver());
  this.fapply(nodeArgs).fail(deferred.reject);
  return deferred.promise;
 };

 /**
  * Passes a continuation to a Node function, which is called with the given
  * arguments provided individually, and returns a promise.
  * @example
  * Q.nfcall(FS.readFile, __filename)
  * .then(function (content) {
  * })
  *
  */
 Q.nfcall = function (callback /*...args*/) {
  var args = array_slice(arguments, 1);
  return Q(callback).nfapply(args);
 };

 Promise.prototype.nfcall = function (/*...args*/) {
  var nodeArgs = array_slice(arguments);
  var deferred = defer();
  nodeArgs.push(deferred.makeNodeResolver());
  this.fapply(nodeArgs).fail(deferred.reject);
  return deferred.promise;
 };

 /**
  * Wraps a NodeJS continuation passing function and returns an equivalent
  * version that returns a promise.
  * @example
  * Q.nfbind(FS.readFile, __filename)("utf-8")
  * .then(console.log)
  * .done()
  */
 Q.nfbind =
 Q.denodeify = function (callback /*...args*/) {
  var baseArgs = array_slice(arguments, 1);
  return function () {
   var nodeArgs = baseArgs.concat(array_slice(arguments));
   var deferred = defer();
   nodeArgs.push(deferred.makeNodeResolver());
   Q(callback).fapply(nodeArgs).fail(deferred.reject);
   return deferred.promise;
  };
 };

 Promise.prototype.nfbind =
 Promise.prototype.denodeify = function (/*...args*/) {
  var args = array_slice(arguments);
  args.unshift(this);
  return Q.denodeify.apply(void 0, args);
 };

 Q.nbind = function (callback, thisp /*...args*/) {
  var baseArgs = array_slice(arguments, 2);
  return function () {
   var nodeArgs = baseArgs.concat(array_slice(arguments));
   var deferred = defer();
   nodeArgs.push(deferred.makeNodeResolver());
   function bound() {
    return callback.apply(thisp, arguments);
   }
   Q(bound).fapply(nodeArgs).fail(deferred.reject);
   return deferred.promise;
  };
 };

 Promise.prototype.nbind = function (/*thisp, ...args*/) {
  var args = array_slice(arguments, 0);
  args.unshift(this);
  return Q.nbind.apply(void 0, args);
 };

 /**
  * Calls a method of a Node-style object that accepts a Node-style
  * callback with a given array of arguments, plus a provided callback.
  * @param object an object that has the named method
  * @param {String} name name of the method of object
  * @param {Array} args arguments to pass to the method; the callback
  * will be provided by Q and appended to these arguments.
  * @returns a promise for the value or error
  */
 Q.nmapply = // XXX As proposed by "Redsandro"
 Q.npost = function (object, name, args) {
  return Q(object).npost(name, args);
 };

 Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
 Promise.prototype.npost = function (name, args) {
  var nodeArgs = array_slice(args || []);
  var deferred = defer();
  nodeArgs.push(deferred.makeNodeResolver());
  this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
  return deferred.promise;
 };

 /**
  * Calls a method of a Node-style object that accepts a Node-style
  * callback, forwarding the given variadic arguments, plus a provided
  * callback argument.
  * @param object an object that has the named method
  * @param {String} name name of the method of object
  * @param ...args arguments to pass to the method; the callback will
  * be provided by Q and appended to these arguments.
  * @returns a promise for the value or error
  */
 Q.nsend = // XXX Based on Mark Miller's proposed "send"
 Q.nmcall = // XXX Based on "Redsandro's" proposal
 Q.ninvoke = function (object, name /*...args*/) {
  var nodeArgs = array_slice(arguments, 2);
  var deferred = defer();
  nodeArgs.push(deferred.makeNodeResolver());
  Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
  return deferred.promise;
 };

 Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
 Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
 Promise.prototype.ninvoke = function (name /*...args*/) {
  var nodeArgs = array_slice(arguments, 1);
  var deferred = defer();
  nodeArgs.push(deferred.makeNodeResolver());
  this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
  return deferred.promise;
 };

 /**
  * If a function would like to support both Node continuation-passing-style and
  * promise-returning-style, it can end its internal promise chain with
  * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
  * elects to use a nodeback, the result will be sent there.  If they do not
  * pass a nodeback, they will receive the result promise.
  * @param object a result (or a promise for a result)
  * @param {Function} nodeback a Node.js-style callback
  * @returns either the promise or nothing
  */
 Q.nodeify = nodeify;
 function nodeify(object, nodeback) {
  return Q(object).nodeify(nodeback);
 }

 Promise.prototype.nodeify = function (nodeback) {
  if (nodeback) {
   this.then(function (value) {
    Q.nextTick(function () {
     nodeback(null, value);
    });
   }, function (error) {
    Q.nextTick(function () {
     nodeback(error);
    });
   });
  } else {
   return this;
  }
 };

 Q.noConflict = function () {
  throw new Error("Q.noConflict only works when Q is used as a global");
 };

 // All code before this point will be filtered from stack traces.
 var qEndingLine = captureLine();

 return Q;

});






var fs = require("fs");
var path = require('path');
var _ = require('underscore');
var Q = require('q');
/**
 * web3plus - a library of added functionality to the Ethereum web3.js library.
 */
/**
 * The web3 object to communicate with the Ethereum node over RPC.
 */
exports.web3 = require('web3');
/**
 * Full base path where contracts are sourced when using deployFromFile.
 */
var contractsPath;
var compilationCache = {};
/**
 * Create the Ethereum web3 library.
 */
function createWeb3(jsonRpcUrl) {
 exports.web3.setProvider(new exports.web3.providers.HttpProvider(jsonRpcUrl));
 exports.web3.eth.defaultAccount = exports.web3.eth.coinbase;
 console.log("web3 initialized with provider URL: " + jsonRpcUrl);
 var coinbase = exports.web3.eth.coinbase;
 console.log("web3 coinbase: " + coinbase);
 var balance = exports.web3.eth.getBalance(coinbase);
 console.log("web3 coinbase balance: " + balance.toString(10));
}
/**
 * Initialize web3plus with an already initialized web3 object.
 */
function initialize(jsonRpcUrl, cp) {
 createWeb3(jsonRpcUrl);
 contractsPath = cp;
 console.log("web3plus initialized with contract path '" + cp + "'.");
}
exports.initialize = initialize;
function getCompileResult(sourceCode) {
 if (compilationCache[sourceCode])
  return compilationCache[sourceCode];
 var compileResult = exports.web3.eth.compile.solidity(sourceCode);
 compilationCache[sourceCode] = compileResult;
 return compileResult;
}
/**
 * Deploy a solidity contract.
 */
function deployContract(
    /**
     * Full Solidity source code. The source code can contain multiple contracts.
     * The contract to be deployed is specified in the mainContract parameter.
     */
    soliditySourceCode,
    /**
     * Name of the main contract to deploy.
     */
    mainContractName,
    /**
     * Turn all state-changing contract functions into Promise functions?
     */
    promiseify,
    /**
     * Callback function which is called when deployment is done (or has failed).
     */
    callback) {
 /**
  * Parameters for the constructor. Optional.
  */
 var args = [];
 for (var _i = 4; _i < arguments.length; _i++) {
  args[_i - 4] = arguments[_i];
 }
 // Compile source code
 var compileResult = getCompileResult(soliditySourceCode);
 // Compiled contracts are returned as an object with each of the contracts as a property.
 // Example:
 //contract Car {
 //    bytes name;
 //    function Car(bytes _name) {
 //        name = _name;
 //    }
 //}
 //contract CarFactory {
 //    function createCar(bytes name) returns (Car c) {
 //        return new Car(name);
 //    }
 //}
 // will result in an object with properties "Car" and "CarFactory".
 // We select the main contract to be deployed by name.
 if (!compileResult[mainContractName])
  callback("Contract '" + mainContractName + "' is not present in compile result", null);
 var compiledContract = compileResult[mainContractName];
 var contractDefinition = exports.web3.eth.contract(compiledContract.info.abiDefinition);
 var deploymentOptions = {
  data: compiledContract.code,
  // TODO: make configurable.
  gas: 3500000,
 };
 var t = this;
 args.push(deploymentOptions);
 var handleDeployment = function (deployErr, contract) {
  if (deployErr) {
   console.log("Error on deployment:");
   console.log(deployErr);
   callback(deployErr, null);
  }
  else {
   // The callback is called twice. Once on pending, once after the block has been mined. Only
   // the second time can we get the contract address
   if (contract.address) {
    console.log("Successfully deployed contract at address " + contract.address);
    enhanceContract(compileResult, contract, mainContractName, promiseify);
    callback(null, contract);
   }
   else {
    console.log("Transaction submitted. txHash: " + contract.transactionHash);
   }
  }
 };
 args.push(handleDeployment);
 // Deploy contract
 contractDefinition.new.apply(contractDefinition, args);
}
exports.deployContract = deployContract;
function enhanceContract(
    /**
     * The result of compilation of the contract and sub contract, as returned by web3.eth.compile.solidity().
     */
    compileResult,
    /**
     * The contract as returned by contract.new() or contract.at().
     */
    contract,
    /**
     * Name of the main contract (the 'contract' parameter).
     */
    mainContractName,
    /**
     * Turn all state-changing contract functions into Promise functions?
     */
    promiseify) {
 // Save the contract definitions for all (sub-)contracts so they can
 // be easily instantiated by callers.
 contract.allContractTypes = compileResult;
 var mainContractDefinition;
 // Enhance the contract definitions with a contract definition class that can be
 // instantiated with .at() to access existing subcontracts.
 for (var cn in contract.allContractTypes) {
  var cd = exports.web3.eth.contract(contract.allContractTypes[cn].info.abiDefinition);
  contract.allContractTypes[cn].contractDefinition = cd;
  // Remember the definition of the main contract to use below.
  if (cn == mainContractName)
   mainContractDefinition = cd;
 }
 ;
 // Add a shorthand function to return the ABI for any function of the contract.
 contract.getAbi = function (functionName) {
  return _(mainContractDefinition.abi).find(function nameMatches(abiInfo) {
   return abiInfo["name"] === functionName;
  });
 };
 if (promiseify) {
  // Convert state-changing functions to use promises.
  var memberName;
  for (memberName in contract) {
   // Ignore default fields which either web3plus or web3 adds.
   if (memberName === "allEvents"
       || memberName === "getAbi"
       || memberName === "address"
       || memberName === "transactionHash"
       || memberName === "allContractTypes")
    continue;
   var fun = contract[memberName];
   // Is it a Javascript function?
   if (_.isFunction(fun)) {
    var abi = contract.getAbi(memberName);
    // Is it a non-constant contract function?
    if (!abi.constant && abi.type == "function") {
     // Yes? then replace it by a denodeify-ed function.
     contract[memberName] = Q.denodeify(fun);
    }
   }
  }
 }
 return contract;
}
exports.enhanceContract = enhanceContract;
/**
 * Deploy a contract that is stored on disk. The file currently has to be in /../contracts relative
 * to this file.
 */
function deployContractFromFile(
    /**
     * Contract filename, e.g. "myContract.sol". The full, absolute path needs to be passed.
     */
    fileName,
    /**
     * Name of the main contract to deploy.
     */
    mainContract,
    /**
     * Turn all state-changing contract functions into Promise functions?
     */
    promiseify,
    /**
     * Callback function which is called when deployment is done (or has failed).
     */
    callback) {
 /**
  * Parameters for the constructor. Optional.
  */
 var args = [];
 for (var _i = 4; _i < arguments.length; _i++) {
  args[_i - 4] = arguments[_i];
 }
 // Read contract source
 // TODO: allow smarter finding of contracts files from multiple locations using
 // something like node-find-files.
 var fullPath = path.resolve(contractsPath, fileName);
 // Clone the arguments to pass through deployContract, including the variable-sized args.
 var deployArgs = Array.prototype.slice.call(arguments);
 fs.readFile(fullPath, 'utf8', function (err, data) {
  if (err)
   callback(err, null);
  else {
   // Cut the BOM from utf8 files
   data = data.replace(/^\uFEFF/, '');
   deployArgs[0] = data;
   deployArgs[3] = function (contractErr, contractRes) {
    if (contractErr)
     callback(contractErr, null);
    else {
     callback(null, contractRes);
    }
   };
   deployContract.apply(null, deployArgs);
  }
 });
}
exports.deployContractFromFile = deployContractFromFile;
/**
 * Returns a Promise that resolves when the specified transaction hash has been committed
 * to the blockchain.
 * Usage:
 * myContract.stateChangingMethod(function(err, res) {
 *  promiseCommittal(res)
 *      .then(... do stuff after it has been committed ...)
 *      .catch(... handle errors ...);
 *  });
 * Or with a promisified contract method:
 * myContract.stateChangingMethod()
 *      .then(... do stuff after it has been committed ...)
 *      .catch(... handle errors ...);
 */
function promiseCommital(txHash) {
 console.log("Waiting til transaction " + txHash + " has been committed.");
 return Q.Promise(function (resolve, reject) {
  // Watch for the tx to be processed.
  // Tried to use a filter with { topics: [txHash] }, but that never fires.
  var f = exports.web3.eth.filter("latest");
  f.watch(function (err, res) {
   if (err)
    reject(err);
   else {
    // Check whether the tx has been processed
    resolveIfCommitted();
   }
  });
  // Check at least once in case the filter was placed after processing the tx.
  resolveIfCommitted();
  /**
   * Resolve the promise if the tx has been committed.
   */
  function resolveIfCommitted() {
   exports.web3.eth.getTransaction(txHash, function (txErr, txRes) {
    if (txRes.blockNumber) {
     if (f) {
      f.stopWatching();
     }
     resolve(txRes);
    }
   });
  }
 });
}
exports.promiseCommital = promiseCommital;
/**
 * Load a solidity contract that's deployed on the blockchain from its source .
 */
function loadContract(
    /**
     * Full Solidity source code. The source code can contain multiple contracts.
     * The contract to be deployed is specified in the mainContract parameter.
     */
    soliditySourceCode,
    /**
     * Name of the main contract to deploy.
     */
    mainContractName,
    /**
     * Address where the contract was deployed.
     */
    address,
    /**
     * Turn all state-changing contract functions into Promise functions?
     */
    promiseify,
    /**
     * Callback function which is called when contract has been loaded.
     */
    callback) {
 if (!address) {
  callback("Empty contract address");
  return;
 }
 //if (!web3.eth.getCode(address)) {
 //    callback("Invalid contract address");
 //    return;
 //}
 // Compile source code
 var compileResult = getCompileResult(soliditySourceCode);
 // We select the main contract to be loaded by name.
 if (!compileResult[mainContractName])
  callback("Contract '" + mainContractName + "' is not present in compile result", null);
 var compiledContract = compileResult[mainContractName];
 var contractDefinition = exports.web3.eth.contract(compiledContract.info.abiDefinition);
 // Use callback for .at() because it requires an RPC call.
 contractDefinition.at(address, function (err, contract) {
  if (err)
   callback(err, null);
  else {
   enhanceContract(compileResult, contract, mainContractName, promiseify);
   callback(null, contract);
  }
 });
}
exports.loadContract = loadContract;
/**
 * Load a contract that has been deployed to the blockchain from its solidity source
 * code stored on disk. The source code file has to be in contractsPath.
 */
function loadContractFromFile(
    /**
     * Contract filename, e.g. "myContract.sol". The full, absolute path needs to be passed.
     */
    fileName,
    /**
     * Name of the main contract to deploy.
     */
    mainContract,
    /**
     * Address where the contract was deployed.
     */
    address,
    /**
     * Turn all state-changing contract functions into Promise functions?
     */
    promiseify,
    /**
     * Callback function which is called when contract has been loaded.
     */
    callback) {
 // Read contract source
 // TODO: allow smarter finding of contracts files from multiple locations using
 // something like node-find-files.
 var fullPath = path.resolve(contractsPath, fileName);
 // Clone the arguments to pass through loadContract.
 var loadArgs = Array.prototype.slice.call(arguments);
 fs.readFile(fullPath, 'utf8', function (err, data) {
  if (err)
   callback(err, null);
  else {
   // Cut the BOM from utf8 files
   data = data.replace(/^\uFEFF/, '');
   loadArgs[0] = data;
   loadArgs[4] = function (contractErr, contractRes) {
    if (contractErr)
     callback(contractErr, null);
    else {
     callback(null, contractRes);
    }
   };
   loadContract.apply(null, loadArgs);
  }
 });
}
exports.loadContractFromFile = loadContractFromFile;
/**
 * Load contract source code from its solidity source
 * code stored on disk. The source code file has to be in contractsPath.
 */
function loadContractSourceCodeFromFile(
    /**
     * Contract filename, e.g. "myContract.sol". The full, absolute path needs to be passed.
     */
    fileName,
    /**
     * Callback function which is called when contract has been loaded.
     */
    callback) {
 // Read contract source
 // TODO: allow smarter finding of contracts files from multiple locations using
 // something like node-find-files.
 var fullPath = path.resolve(contractsPath, fileName);
 fs.readFile(fullPath, 'utf8', function (err, data) {
  if (err)
   callback(err, null);
  else {
   // Cut the BOM from utf8 files
   data = data.replace(/^\uFEFF/, '');
   callback(null, data);
  }
 });
}
exports.loadContractSourceCodeFromFile = loadContractSourceCodeFromFile;