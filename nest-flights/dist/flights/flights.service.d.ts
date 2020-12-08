import { Repository, UpdateResult } from 'typeorm';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';
export declare class FlightsService {
    private readonly flightRepository;
    constructor(flightRepository: Repository<Flights>);
    create(flight: Flight): Promise<any>;
    findOne(id: number): Promise<any>;
    findAll(): Promise<Flights[]>;
    query(orig: string, dest: string): Promise<any>;
    update(flight: Flight): Promise<UpdateResult>;
    delete(id: number): Promise<any>;
    getFlightOrigins(): Promise<String[]>;
    getFlightDestinations(): Promise<String[]>;
}
