const count_select = document.querySelector('#count-category');
const added_fields = document.querySelector('.extras');
const submit_btn = document.querySelector('#submit-count');

count_select.addEventListener('change', () => {
    if(count_select.value === 'none') added_fields.innerHTML = ''
    else if (count_select.value === 'assessment') {
        added_fields.innerHTML = `
        <div class="form-floating mb-3">
            <select class="form-select selections" aria-label="select risk" id="selection" style="width: 50%;">
                <option selected value="none"></option>
                <option value="low">Low Risk</option>
                <option value="intermediate">Intermediate Risk</option>
                <option value="high">High Risk</option>
            </select>
            <label for="selection">equal to</label>
        </div>`
    }
    else if (count_select.value === 'metastasis') added_fields.innerHTML = ''
    else if (count_select.value === 'side') added_fields.innerHTML = ''
    else if (count_select.value === 'lesions') {
        added_fields.innerHTML = `
        <div class="card mb-3" style="width: 50%">
        <div class="card-header">on</div>
            <div class="card-body">
                <div class="form-check form-check-inline">
                    <input class="form-check-input checks" type="checkbox" id="checkbox-prostate" value="prostate">
                    <label class="form-check-label" for="checkbox-prostate">Prostate</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input checks" type="checkbox" id="checkbox-lymph" value="lymph">
                    <label class="form-check-label" for="checkbox-lymph">Lymph Nodes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input checks" type="checkbox" id="checkbox-bone" value="bone">
                    <label class="form-check-label" for="checkbox-bone">Bone</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input checks" type="checkbox" id="checkbox-brain" value="brain">
                    <label class="form-check-label" for="checkbox-brain">Brain</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input checks" type="checkbox" id="checkbox-lungs" value="lungs">
                    <label class="form-check-label" for="checkbox-lungs">Lungs</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input checks" type="checkbox" id="checkbox-liver" value="liver">
                    <label class="form-check-label" for="checkbox-liver">Liver</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input checks" type="checkbox" id="checkbox-others" value="others">
                    <label class="form-check-label" for="checkbox-others">Others</label>
                </div>
            </div>
        </div>
        <div class="form-floating mb-3">
            <select class="form-select subsel selections" aria-label="select based" id="selection" style="width: 50%;">
                <option selected value="none"></option>
                <option value="imaging">Ga-68/F18-PSMA imaging/FDG PET/CT</option>
                <option value="postscan">Post-theraphy scan</option>
            </select>
            <label for="selection">based on</label>
        </div>
        <div class="subextra"></div>`
        const subselect = document.querySelector('.subsel')
        
        subselect.addEventListener('change', () => {
        const subextra = document.querySelector('.subextra')
        if (subselect.value === 'none') subextra.innerHTML = ''
        else if (subselect.value === 'imaging') {
            subextra.innerHTML = `
            <div class="form-floating mb-3">
            <select class="form-select selections" aria-label="select during" id="selection" style="width: 50%;">
                <option selected value="none"></option>
                <option value="screening">Screening</option>
                <option value="followup">Follow up</option>
            </select>
            <label for="selection">during</label>
        </div>`
        }
        else if (subselect.value === 'postscan'){
            //make this dynamic
            //make a get request that counts the number of post theraphy per patient
            //temporarily make it 3
            subextra.innerHTML = `
            <div class="form-floating mb-3">
            <select class="form-select selections" aria-label="select number" id="selection" style="width: 50%;">
                <option selected value="none"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <label for="selection">number</label>
        </div>`
        }
        })
    }
})

submit_btn.addEventListener('click', () => {
    const selection = document.querySelectorAll('.selections');
    if (count_select.value === 'none') alert('Please select a count category')
    else if (count_select.value === 'assessment') {
        selection.forEach((sel) => {
            console.log(sel.value)
        })
    }
    else if (count_select.value === 'metastasis') {
        selection.forEach((sel) => {
            console.log(sel.value)
        })
    }
    else if (count_select.value === 'lesions') {
        selection.forEach((sel) => {
            console.log(sel.value)
        })
        const checks = document.querySelectorAll('.checks')
        var count = 0
        checks.forEach((check) => {
            if (check.checked) console.log(check.value)
            else count++

        })
        if (count == 7) alert('Please select a lesion location')
    }
    else if (count_select.value === 'side') {
        selection.forEach((sel) => {
            console.log(sel.value)
        })
    }
})