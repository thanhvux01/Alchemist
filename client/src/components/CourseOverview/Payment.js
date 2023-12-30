import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Paper,CardMedia,Button } from '@mui/material';
import {
    OndemandVideo,
    QuizRounded,
    LibraryBooksRounded,
    AllInclusiveRounded,
  } from "@mui/icons-material";
import { useNavigate } from 'react-router';
let cx = classNames.bind(styles);

export function PaymentSection({price,id,sale}) {
    const Navigate = useNavigate();


    return <div className={cx("interact-section")}>
      <Paper className={cx("content")} elevation={3}>
        <CardMedia
          className={cx("media-section")}
          src="https://res.cloudinary.com/dicgj8bdg/video/upload/v1703822319/x2mate.com-The_Map_of_Chemistry_z6a4f7.mp4"
          component={"video"}
          controls />
        <div className={cx("price-section")}>
          <div className={cx("price")}>
            <span className={cx("sale-price")}>
              {price.toLocaleString("en-US") + "VND"}
            </span>
          </div>
          <div className={cx("sale")}>
            <span className={cx("origin-price")}>
              {(price*(1-(sale/100))).toLocaleString("en-US") + "VND"}
            </span>
            <span className={cx("off-percent")}>{sale && sale}%</span>
          </div>
        </div>
        <div className={cx("btn-section")}>
          <div className={cx("break")}></div>
          <Button variant="outlined" className={cx("btn-buy")} onClick={()=>{Navigate("/payment/"+id)}}>
            Buy now
          </Button>
        </div>
        <div className={cx("supply")}>
          <span className={cx("title")}>Khoá học này bao gồm</span>
          <span className={cx("line")}>
            <LibraryBooksRounded
              sx={{
                height: 20,
              }} /> 
            <span className={cx("detail")}>20 bài lý thuyết</span>
          </span>
          <span className={cx("line")}>
            <OndemandVideo
              sx={{
                height: 20,
              }} />
            <span className={cx("detail")}>
              10 video trong khoá học
            </span>
          </span>
          <span className={cx("line")}>
            <QuizRounded
              sx={{
                height: 20,
              }} />
            <span className={cx("detail")}>10 bài trắc nghiệm</span>
          </span>
          <span className={cx("line")}>
            <AllInclusiveRounded
              sx={{
                height: 20,
              }} />
            <span className={cx("detail")}>Truy cập vĩnh viễn</span>
          </span>
        </div>
      </Paper>
    </div>;
  }