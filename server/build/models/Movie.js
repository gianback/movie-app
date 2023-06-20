"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const movieSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "El titulo es obligatorio"],
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    image_primary: {
        public_id: String,
        secure_url: String,
    },
    image_secondary: {
        public_id: String,
        secure_url: String,
    },
    comments: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "comment",
        },
    ],
}, {
    versionKey: false,
    timestamps: true,
});
movieSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, movie = __rest(_a, ["__v"]);
    return movie;
};
movieSchema.statics.addCommentToMovie = function (movieId, commentId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.findByIdAndUpdate(movieId, {
            $push: { comments: commentId },
        });
    });
};
exports.Movie = mongoose_1.default.model("movie", movieSchema);
