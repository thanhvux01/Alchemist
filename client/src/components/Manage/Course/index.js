import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Paper , Pagination ,Button} from '@mui/material';
import CardCourse from '../../CardCourse';
let cx = classNames.bind(styles);

const ManageCourseContent = ({courses}) => {
  return (
    <div className={cx('container')}>
        <Paper className={cx('courses-wrapper')}>
            <div className={cx('list-course')}>
            {courses && courses.map((course)=><CardCourse course={course} />)}
            </div>
            <div className={cx('bottom-section')}>
            <Pagination count={10} color="primary" />
             <span className={cx('btn-section')}>
                   <Button variant='contained'>Soạn khoá học mới</Button>
             </span>
            </div>
        </Paper>
    </div>
  )
}

export default ManageCourseContent