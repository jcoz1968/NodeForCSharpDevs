export class UserService {

    async getUserAsync() {
        return new Promise((resolve, reject) => {
            resolve([
                { userId: 100 }, 
                { userId: 101 }
            ]);
        });
    }
    
}