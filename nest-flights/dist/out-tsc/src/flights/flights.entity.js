var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
let Flights = class Flights {
};
__decorate([
    PrimaryGeneratedColumn()
], Flights.prototype, "id", void 0);
__decorate([
    Column("varchar", { length: 20 })
], Flights.prototype, "origin", void 0);
__decorate([
    Column("varchar", { length: 20 })
], Flights.prototype, "destination", void 0);
__decorate([
    Column('int')
], Flights.prototype, "flightNumber", void 0);
__decorate([
    Column('datetime')
], Flights.prototype, "depart", void 0);
__decorate([
    Column('datetime')
], Flights.prototype, "arrive", void 0);
__decorate([
    Column('boolean')
], Flights.prototype, "nonstop", void 0);
Flights = __decorate([
    Entity()
], Flights);
export { Flights };
//# sourceMappingURL=flights.entity.js.map