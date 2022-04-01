import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import icon27 from '../../../images/icon27.svg';
import icon28 from '../images/icon28.svg';
import icon29 from '../images/icon29.svg';
import icon31 from '../images/icon31.svg';
import ReactTooltip from 'react-tooltip';
const displayName = 'ExportModal'
const propTypes = {
  categories: PropTypes.object.isRequired,
  projectsbots: PropTypes.object.isRequired
}
const ExportModal = ({  categories, projectsbots }) => {
  return (
	<div className="modalBodyContent">
				<Form>
          <h2><img src={icon38} alt="" />DATA EXTRACTION BOTS/SCRAPERS</h2>
					<FormGroup>
					<Label>Select the bots/scrapers to export:<span>You can download just speciﬁc bots or all the bots within a category (multiple selection allowed). *Data sets not included in the export ﬁle.</span></Label>                  
					<div className="multi-select-box">
            <div className="search-box">
              <Label><Input type="checkbox" />Select all</Label>
              <div className="searchInput">
                <span className="search-icon">
                  <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-2x"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" class=""></path></svg>
                </span>
                <Input type="text" placeholder="Search category or bot/scraper"  />
                <span className="close-icon">
                  <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-times-circle fa-w-16 fa-2x"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" class=""></path></svg>
                </span>
              </div>
            </div>
					  <MultiSelectComponent defaultMenuIsOpen="true" id="mtselement" popupHeight='400px' fields={fields} dataSource={categories} placeholder="Search category or bot/scraper" mode="CheckBox" enableGroupCheckBox="true" allowFiltering="true" showSelectAll="true" filterBarPlaceholder="Search categories">
              <Inject services={[CheckBoxSelection]} />
            </MultiSelectComponent>
					</div>
					</FormGroup>
          <h2><img src={dataSet} alt="" />DATA SETS</h2>
          <FormGroup>
					<Label>Select the data sets to export:<span>You can download all the data sets associated with a project or a speciﬁc bot (multiple selection allowed).</span></Label>                  
					<div className="multi-select-box">
            <div className="search-box">
              <Label><Input type="checkbox" />Select all</Label>
              <div className="searchInput">
                <span className="search-icon">
                  <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-2x"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" class=""></path></svg>
                </span>
                <Input type="text" placeholder="Search project or bot/scraper"  />
                <span className="close-icon">
                  <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-times-circle fa-w-16 fa-2x"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" class=""></path></svg>
                </span>
              </div>
            </div>
					  <MultiSelectComponent id="mtselement" popupHeight='400px' fields={fields1} dataSource={projectsbots} placeholder="Search project or bot/scraper" mode="CheckBox" enableGroupCheckBox="true" allowFiltering="true" showSelectAll="true" filterBarPlaceholder="Search Vegetables">
              <Inject services={[CheckBoxSelection]} />
            </MultiSelectComponent>
					</div>
					</FormGroup>
					<div className="btn-block">
					<Link to="#0" onClick={handle_cancel}>CANCEL</Link>
					<Link to="/project-bots-list" className="style-two">Download</Link>
					</div>					
				</Form>
				</div>
  )
}
ExportModal.displayName = displayName
ExportModal.propTypes = propTypes
export default ExportModal