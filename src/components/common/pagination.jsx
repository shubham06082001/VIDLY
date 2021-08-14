import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  // console.log(currentPage);

  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);
  return (
    <div
      style={{
        margin: '50px 100px 20px',
        width: '100%',
        height: '100px',
        fontWeight: 'bold',
        textAlign: 'center',
      }}
    >
      <nav aria-label='...'>
        <ul className='pagination'>
          {pages.map((page) => {
            return (
              <li
                className={
                  page === currentPage ? 'page-item active' : 'page-item'
                }
                key={page}
              >
                <span className='page-link' onClick={() => onPageChange(page)}>
                  {page}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
