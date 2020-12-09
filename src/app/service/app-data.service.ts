import { BehaviorSubject } from 'rxjs';

export class AppDataService {
    private userData = new BehaviorSubject<any>([]);

    setAppData(appDataNew: any){
        this.userData.next(appDataNew);
    }

    getAppData(){
        return this.userData.asObservable();
    }
}
