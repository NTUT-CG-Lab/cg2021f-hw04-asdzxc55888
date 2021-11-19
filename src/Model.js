import { MMDLoader } from '../jsm/loaders/MMDLoader.js';
import * as THREE from '../build/three.module.js';
const loader = new MMDLoader();

export class Model {
    constructor(modelPath, initList) {
        this.modelPath = modelPath;
        this.mesh = new THREE.Object3D();
        this.standardlist = this.initStandardList(initList);
        this.loadModel();
    }

    initStandardList(initList) {
        let standardlist = {
            eyebrow_troubled_left: 0, eyebrow_troubled_right: 0, eyebrow_angry_left: 0, eyebrow_angry_right: 0, eyebrow_serious_left: 0, eyebrow_serious_right: 0, eyebrow_happy_left: 0
            , eyebrow_happy_right: 0, eyebrow_lowered_left: 0, eyebrow_lowered_right: 0, eyebrow_raised_left: 0, eyebrow_raised_right: 0, eye_wink_left: 0
            , eye_wink_right: 0, eye_happy_wink_left: 0, eye_happy_wink_right: 0, eye_relaxed_left: 0, eye_relaxed_right: 0, eye_unimpressed_left: 0
            , eye_unimpressed_right: 0
            , eye_raised_lower_eyelid_left: 0, eye_raised_lower_eyelid_right: 0, eye_surprised_left: 0, eye_surprised_right: 0, iris_small_left: 0, iris_small_right: 0
            , mouth_aaa: 0, mouth_iii: 0, mouth_uuu: 0, mouth_eee: 0, mouth_ooo: 0, mouth_delta: 0, mouth_smirk: 0, mouth_raised_corner_left: 0, mouth_raised_corner_right: 0, mouth_lowered_corner_left: 0, mouth_lowered_corner_right: 0
        };
        let standardlistIndex = 0
        for (const key in standardlist) {
            standardlist[key] = initList[standardlistIndex];
            standardlistIndex += 1;
        }
        return standardlist;
    }

    getStandardlist() {
        return this.standardlist;
    }

    getStandardlistWithIndex() {
        let indexCount = 0;
        let standardlistWithIndex = {};
        for (const key in this.standardlist) {
            standardlistWithIndex[indexCount] = this.standardlist[key]
            indexCount += 1;
        }
        let model_info = {"location":this.modelPath}
        model_info["standardlist"] = standardlistWithIndex
        return model_info;
    }

    setStandardlist(key, value) {
        this.standardlist[key] = value;
    }

    loadModel() {
        loader.load(this.modelPath, (object) => this.setMesh(object));
    }

    setMesh(object) {
        this.mesh = object;
        this.mesh.position.y = - 10;
    }

    getMesh() {
        return this.mesh;
    }


}