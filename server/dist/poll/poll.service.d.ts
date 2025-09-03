import { Repository } from 'typeorm/repository/Repository.js';
import { Poll } from './poll.entity';
export declare class PollService {
    private readonly pollRepository;
    constructor(pollRepository: Repository<Poll>);
    createPoll(question: string, options: string[]): Promise<Poll>;
    getAllPolls(): Promise<Poll[]>;
}
