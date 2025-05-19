// CameraWrapper.ts
// TypeScript class wrapper for RageMP client Camera API
// This class hides the RageMP API and exposes only camera-related methods.

// You must provide the actual RageMP Camera type in your project context.
// Here we use 'any' for demonstration. Replace 'any' with the correct type if available.

export class CameraWrapper {
    private camera: any;

    constructor(...args: any[]) {
        // @ts-ignore
        this.camera = new mp.game.cam.Camera(...args);
    }

    animatedShake(animName: string, amplitude: number): void {
        this.camera.animatedShake(animName, amplitude);
    }

    attachTo(entity: any, boneIndex: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, fixedRot: boolean): void {
        this.camera.attachTo(entity, boneIndex, x, y, z, rotX, rotY, rotZ, fixedRot);
    }

    attachToPedBone(ped: any, boneIndex: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number): void {
        this.camera.attachToPedBone(ped, boneIndex, x, y, z, rotX, rotY, rotZ);
    }

    destroy(): void {
        this.camera.destroy();
    }

    detach(): void {
        this.camera.detach();
    }

    doesExist(): boolean {
        return this.camera.doesExist();
    }

    getAnimCurrentPhase(): number {
        return this.camera.getAnimCurrentPhase();
    }

    getCoord(): { x: number, y: number, z: number } {
        return this.camera.getCoord();
    }

    getDirection(): { x: number, y: number, z: number } {
        return this.camera.getDirection();
    }

    getFarClip(): number {
        return this.camera.getFarClip();
    }

    getFarDof(): number {
        return this.camera.getFarDof();
    }

    getFov(): number {
        return this.camera.getFov();
    }

    getNearClip(): number {
        return this.camera.getNearClip();
    }

    getRot(order?: number): { x: number, y: number, z: number } {
        return this.camera.getRot(order);
    }

    getSplinePhase(): number {
        return this.camera.getSplinePhase();
    }

    isActive(): boolean {
        return this.camera.isActive();
    }

    isInterpolating(): boolean {
        return this.camera.isInterpolating();
    }

    isPlayingAnim(animName: string, animDict: string): boolean {
        return this.camera.isPlayingAnim(animName, animDict);
    }

    isRendering(): boolean {
        return this.camera.isRendering();
    }

    isShaking(): boolean {
        return this.camera.isShaking();
    }

    playAnim(animName: string, animDict: string, x: number, y: number, z: number, duration: number, flag: boolean): void {
        this.camera.playAnim(animName, animDict, x, y, z, duration, flag);
    }

    pointAt(entity: any, offsetX: number, offsetY: number, offsetZ: number): void {
        this.camera.pointAt(entity, offsetX, offsetY, offsetZ);
    }

    pointAtCoord(x: number, y: number, z: number): void {
        this.camera.pointAtCoord(x, y, z);
    }

    pointAtPedBone(ped: any, boneIndex: number, x: number, y: number, z: number): void {
        this.camera.pointAtPedBone(ped, boneIndex, x, y, z);
    }

    setActive(active: boolean): void {
        this.camera.setActive(active);
    }

    setActiveWithInterp(camTo: any, time: number, easePosition: number, easeRotation: number): void {
        this.camera.setActiveWithInterp(camTo, time, easePosition, easeRotation);
    }

    setAffectsAiming(toggle: boolean): void {
        this.camera.setAffectsAiming(toggle);
    }

    setAnimCurrentPhase(phase: number): void {
        this.camera.setAnimCurrentPhase(phase);
    }

    setCoord(x: number, y: number, z: number): void {
        this.camera.setCoord(x, y, z);
    }

    setDebugName(name: string): void {
        this.camera.setDebugName(name);
    }

    setDofFnumberOfLens(value: number): void {
        this.camera.setDofFnumberOfLens(value);
    }

    setDofFocusDistanceBias(value: number): void {
        this.camera.setDofFocusDistanceBias(value);
    }

    setDofMaxNearInFocusDistance(value: number): void {
        this.camera.setDofMaxNearInFocusDistance(value);
    }

    setDofMaxNearInFocusDistanceBlendLevel(value: number): void {
        this.camera.setDofMaxNearInFocusDistanceBlendLevel(value);
    }

    setDofPlanes(near: number, far: number, near2: number, far2: number): void {
        this.camera.setDofPlanes(near, far, near2, far2);
    }

    setDofStrength(strength: number): void {
        this.camera.setDofStrength(strength);
    }

    setFarClip(value: number): void {
        this.camera.setFarClip(value);
    }

    setFarDof(value: number): void {
        this.camera.setFarDof(value);
    }

    setFov(fov: number): void {
        this.camera.setFov(fov);
    }

    setInheritRollVehicle(toggle: boolean): void {
        this.camera.setInheritRollVehicle(toggle);
    }

    setMotionBlurStrength(strength: number): void {
        this.camera.setMotionBlurStrength(strength);
    }

    setNearClip(value: number): void {
        this.camera.setNearClip(value);
    }

    setNearDof(value: number): void {
        this.camera.setNearDof(value);
    }

    setParams(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, fov: number): void {
        this.camera.setParams(x, y, z, rotX, rotY, rotZ, fov);
    }

    setRot(x: number, y: number, z: number, order?: number): void {
        this.camera.setRot(x, y, z, order);
    }

    setShakeAmplitude(amplitude: number): void {
        this.camera.setShakeAmplitude(amplitude);
    }

    setUseShallowDofMode(toggle: boolean): void {
        this.camera.setUseShallowDofMode(toggle);
    }

    shake(type: string, amplitude: number): void {
        this.camera.shake(type, amplitude);
    }

    stopPointing(): void {
        this.camera.stopPointing();
    }

    stopShaking(): void {
        this.camera.stopShaking();
    }

    setDofParam(index: number, value: number): void {
        this.camera.setDofParam(index, value);
    }

    getDofParam(index: number): number {
        return this.camera.getDofParam(index);
    }

    // Entity properties
    get handle(): number {
        return this.camera.handle;
    }

    get id(): number {
        return this.camera.id;
    }
}
