var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
import { Controller, Get, Post, Param, Body, Delete, Patch } from '@nestjs/common';
let FlightsController = class FlightsController {
    constructor(flightService) {
        this.flightService = flightService;
    }
    // CREATE
    create(flight) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightService.create(flight);
        });
    }
    // READ All
    findAll() {
        return this.flightService.findAll();
    }
    // QUERY
    query(orig, dest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightService.query(orig, dest);
        });
    }
    // READ ONE
    findOne(param) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightService.findOne(param.id);
        });
    }
    // UPDATE
    update(id, flight) {
        return __awaiter(this, void 0, void 0, function* () {
            flight.id = Number(id);
            return this.flightService.update(flight);
        });
    }
    // DELETE
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightService.delete(id);
        });
    }
};
__decorate([
    Post(),
    __param(0, Body())
], FlightsController.prototype, "create", null);
__decorate([
    Get()
], FlightsController.prototype, "findAll", null);
__decorate([
    Get("query/:orig/:dest"),
    __param(0, Param('orig')), __param(1, Param('dest'))
], FlightsController.prototype, "query", null);
__decorate([
    Get(":id"),
    __param(0, Param())
], FlightsController.prototype, "findOne", null);
__decorate([
    Patch(":id/update"),
    __param(0, Param('id')), __param(1, Body())
], FlightsController.prototype, "update", null);
__decorate([
    Delete(":id/delete"),
    __param(0, Param('id'))
], FlightsController.prototype, "delete", null);
FlightsController = __decorate([
    Controller('flights')
], FlightsController);
export { FlightsController };
//# sourceMappingURL=flights.controller.js.map