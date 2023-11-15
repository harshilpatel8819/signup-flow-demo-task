const CreatorInfo = () => {
  return (
    <div>
      <div className="w-100">
        <div className="pb-10 pb-lg-12">
          <h2 className="fw-bold text-gray-900">Creator Info</h2>

          <div className="text-muted fw-semibold fs-6">
            If you need more info, please check out
            <a href="#" className="link-primary fw-bold">
              Help Page
            </a>
            .
          </div>
        </div>

        <div className="fv-row mb-10">
          <label className="form-label required">Business Name</label>

          <input
            name="business_name"
            className="form-control form-control-lg form-control-solid"
            value="Keenthemes Inc."
          />
        </div>

        <div className="fv-row mb-10">
          <label className="d-flex align-items-center form-label">
            <span className="required">Shortened Descriptor</span>
            <span className="lh-1 ms-1">
              <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
              </i>
            </span>
          </label>

          <input
            name="business_descriptor"
            className="form-control form-control-lg form-control-solid"
            value="KEENTHEMES"
          />

          <div className="form-text">
            Customers will see this shortened version of your statement
            descriptor
          </div>
        </div>

        <div className="fv-row mb-10">
          <label className="form-label required">Corporation Type</label>

          <select
            name="business_type"
            className="form-select form-select-lg form-select-solid"
          >
            <option></option>
            <option value="1">S Corporation</option>
            <option value="1">C Corporation</option>
            <option value="2">Sole Proprietorship</option>
            <option value="3">Non-profit</option>
            <option value="4">Limited Liability</option>
            <option value="5">General Partnership</option>
          </select>
        </div>

        <div className="fv-row mb-10">
          <label className="form-label">Business Description</label>

          <textarea
            name="business_description"
            className="form-control form-control-lg form-control-solid"
            rows={3}
          ></textarea>
        </div>

        <div className="fv-row mb-0">
          <label className="fs-6 fw-semibold form-label required">
            Contact Email
          </label>

          <input
            name="business_email"
            className="form-control form-control-lg form-control-solid"
            value="corp@support.com"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatorInfo;
