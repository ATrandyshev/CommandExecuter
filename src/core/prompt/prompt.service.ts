import inquirer from 'inquirer';
import { ProptType } from './prompt.type';

export class PromptService {
    public async input<T>(message: string, type: ProptType) {
        const { result } = await inquirer.prompt<{result: T}>([
            {
                type: 'input',
                name: 'result',
                message: message
            }
        ]);

        return result;
    }
}