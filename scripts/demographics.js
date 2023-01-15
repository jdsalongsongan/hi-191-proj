const ht = document.querySelector('#p1-ht');
const wt = document.querySelector('#p1-wt');
const bmi = document.querySelector('#p1-bmi');

ht.addEventListener('change', () => {
    const ht2 = document.querySelector('#p1-ht');
    const wt2 = document.querySelector('#p1-wt');
    if (wt2.value != ''){
        const meter = ht2.value/100
        bmi.value = (wt2.value/(meter*meter)).toPrecision(5)
    }
})

wt.addEventListener('change', () => {
    const ht2 = document.querySelector('#p1-ht');
    const wt2 = document.querySelector('#p1-wt');
    if (ht2.value != ''){
        const meter = ht2.value/100
        bmi.value = (wt2.value/(meter*meter)).toPrecision(5)
    }
})

const sg_opt_obs = document.querySelector('.sg-opt-obs');
const sg_normal = document.querySelector('#sg-normal');
const sg_obstructed = document.querySelector('#sg-obstructed');

sg_normal.addEventListener('click', () => {
    const sg_obs_left = document.querySelector('#sg-obs-left');
    const sg_obs_right = document.querySelector('#sg-obs-right');
    sg_obs_left.checked = false;
    sg_obs_right.checked = false;
    sg_opt_obs.style.display = 'none';
})

sg_obstructed.addEventListener('click', () => {
    const sg_obs_left = document.querySelector('#sg-obs-left');
    const sg_obs_right = document.querySelector('#sg-obs-right');
    sg_obs_left.checked = false;
    sg_obs_right.checked = false;
    sg_opt_obs.style.display = 'block';
})

const bm_opt_obs = document.querySelector('.bm-opt-obs');
const bm_no = document.querySelector('#bm-no');
const bm_with = document.querySelector('#bm-with');

bm_no.addEventListener('click', () => {
    const p1_metastasisloc = document.querySelector('#p1-metastasisloc');
    p1_metastasisloc.value = '';
    bm_opt_obs.style.display = 'none';
})

bm_with.addEventListener('click', () => {
    const p1_metastasisloc = document.querySelector('#p1-metastasisloc');
    p1_metastasisloc.value = '';
    bm_opt_obs.style.display = 'block';
})