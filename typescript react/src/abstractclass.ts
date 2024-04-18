abstract class TakePhotoo {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia(): void 

    getReelTime(): number {
        // some complex calculation
        return 8
    }
}


class Insta extends TakePhotoo{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ) {
            super(cameraMode, filter)
        }

        getSepia(): void {
            console.log('sepia')
        }
}

const hc = new Insta("test", "test", 3)