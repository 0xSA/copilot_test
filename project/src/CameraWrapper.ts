// CameraWrapper.ts
// TypeScript class wrapper for RageMP client Camera API
// Использует типы RageMP для строгой типизации

// Определяем Vector3 локально для совместимости с RageMP
type Vector3 = { x: number; y: number; z: number };

export class CameraWrapper {
    private camera: number; // handle камеры

    constructor(handle: number) {
        this.camera = handle;
    }

    static create(camName: string, p1: boolean): CameraWrapper {
        // @ts-ignore
        const handle = mp.game.cam.create(camName, p1);
        return new CameraWrapper(handle);
    }

    destroy(bScriptHostCam = false): void {
        // @ts-ignore
        mp.game.cam.destroy(this.camera, bScriptHostCam);
    }

    doesExist(): boolean {
        // @ts-ignore
        return mp.game.cam.doesExist(this.camera);
    }

    setActive(active: boolean): void {
        // @ts-ignore
        mp.game.cam.setActive(this.camera, active);
    }

    isActive(): boolean {
        // @ts-ignore
        return mp.game.cam.isActive(this.camera);
    }

    isRendering(): boolean {
        // @ts-ignore
        return mp.game.cam.isRendering(this.camera);
    }

    getCoord(): Vector3 {
        // @ts-ignore
        return mp.game.cam.getCoord(this.camera);
    }

    setCoord(x: number, y: number, z: number): void {
        // @ts-ignore
        mp.game.cam.setCoord(this.camera, x, y, z);
    }

    getRot(order: number = 2): Vector3 {
        // @ts-ignore
        return mp.game.cam.getRot(this.camera, order);
    }

    setRot(x: number, y: number, z: number, order: number = 2): void {
        // @ts-ignore
        mp.game.cam.setRot(this.camera, x, y, z, order);
    }

    getFov(): number {
        // @ts-ignore
        return mp.game.cam.getFov(this.camera);
    }

    setFov(fov: number): void {
        // @ts-ignore
        mp.game.cam.setFov(this.camera, fov);
    }

    // ...добавьте другие методы по аналогии, используя типы из @ragempcommunity/types-client и документацию
}
