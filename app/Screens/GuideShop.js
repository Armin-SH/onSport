import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import Device from '../Config/device';

import Colors from "../Constetns/Color";
import device from '../Config/device';

const GuideShopScreen = () => {
  return (
    <LinearGradient
      style={styles.gradient}
      colors={[Colors.primary, Colors.second]}
      start={{ x: 2, y: 2 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={{ paddingTop: 70 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={{ ...styles.info }}>
              <Text style={{ ...styles.guide, fontSize: 22, fontFamily:"Shabnam-Bold" }}>راهنمای خرید</Text>
              <Text style={styles.guide}>افزودن کالا به سبد خرید</Text>
              <Text style={styles.guideText}>پس از انتخاب محصول مورد نظر خود در اپلیکیشن، بر روی آیکون "افزودن به سبد خرید" کلیک کنید.</Text>
              <Text style={styles.guide}>تایید نهایی خرید</Text>
              <Text style={styles.guideText}>در ادامه، تمامی محصولات اضافه شده به سبد خرید و مجموع قیمت آنها قابل مشاهده است. در صورتی که کوپن تخفیف دارید، می‌توانید کد آن را در این قسمت وارد کنید.</Text>
              <Text style={styles.guide}>پرداخت مبلغ</Text>
              <Text style={styles.guideText}>بلافاصله پس از ثبت سفارش،همکاران ما  در اولین فرصت، سفارشات ثبت شده را بررسی می‌نمایند. هنگامی که کارشناسان فروش، مشغول بررسی سفارش شما هستند، شما وارد درگاه پرداخت ما خواهید شد و مبلغ ۲۰۰.۰۰۰ تومان بابت بیانه و تایید فاکتور از شما دریافت میشود.
سپس مابقی مبلغ فاکتور را به شماره کارت درج شده واریز کنید و عکس هردو واریزی بهمراه فاکتور خود را به شماره واتساپ ۰۹۲۲۶۱۷۵۶۹۴ ارسال نمایید.</Text>
              <Text style={styles.guide}>5047_0610_2412_2752</Text>
              <Text style={styles.guide}>علی پوربزرگی زیارتگاه</Text>
              <Text style={styles.guideText}>*سفارش شما نهایت تا ۴۸ ساعت ارسال خواهد شد.</Text>
              <View style={styles.seperator} />
              <Text style={{ ...styles.guide, fontSize: 22, fontFamily:"Shabnam-Bold" }}>تماس با ما</Text>
              <Text style={styles.guide}>شماره های تماس</Text>
              <Text style={styles.guideText}>۰۹۱۲۷۲۲۲۵۵۸</Text>
              <Text style={styles.guideText}>۰۹۳۹۴۱۴۳۱۹۷</Text>
              <Text style={styles.guideText}>۰۲۱۳۳۶۱۷۷۸۹</Text>
              <Text style={styles.guide}>آدرس انبار:</Text>
              <Text style={styles.guideText}>
                پایین میدان منیریه. کوچه اهلی شیرازی. پلاک ۴۲
              </Text>
              <Text style={styles.guide}>اینستاگرام</Text>
              <Text style={styles.guideText}>onsportt</Text>
              <Text style={styles.guide}>تلگرام</Text>
              <Text style={styles.guideText}>@onsportt</Text>
              <Text style={styles.guide}>ایمیل</Text>
              <Text style={styles.guideText}>alipurbozorgi85@gmail.com</Text>
              <View style={styles.seperator} />
              <Text style={{ ...styles.guide, fontSize: 22, fontFamily:"Shabnam-Bold" }}>درباره ما</Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>
                مجموعه آنلاین اسپرت فعالیت خود را از سال ۱۳۹۶ آغاز کرده است که
                در این بازه زمانی توانسته ایم بیش از ۱۰۰۰ مدل محصول متنوع در
                بازار عرضه کنیم.
              </Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>
                مواد اولیه ، دوخت با کیفیت و سهولت ارسال از اصلی ترین اهداف این
                مجموعه می باشد.
              </Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>
                ما توانسته ایم باعث پیشرفت در صنعت تولید پوشاک تریکو شویم و از
                روش های متنوعه ایی برای نمایش محصول جهت فروش بیشتر در صعحات
                مجازی مشتریان استفاده کنیم.
              </Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>
                تمامی مدل های ما توسط خلاق ترین طراحان لباس صورت میگیرد تا در
                نتیجه دوخت نهایی محصول به بهترین شکل انجام شود.
              </Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>
                خدارا شاکریم که توانسته ایم سهم کوچکی در چرخه ی تولید این کشور
                داشته باشیم.
              </Text>
              <Text style={styles.guide}>باتشکر </Text>
              <Text style={styles.guide}>گروه تولیدی آنلاین اسپرت</Text>
              <View style={styles.seperator} />
              <Text style={{ ...styles.guide, fontSize: 22, fontFamily:"Shabnam-Bold" }}>قوانین آنلاین اسپورت</Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>
                *برخی از محصولات محدودیت سفارش خواهند داشت.یعنی هر مشتری میتواند
                تعداد مشخص سده ای از آن محصول سفارش دهد.
              </Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>
                *در زمان اتمام موجودی هر محصولی میتوانین عکس یا کد مورد نظر را
                برای تیم فروش ارسال کنین تا در صورت موجود بودن آن محصول به
                فاکتور نهایی شما اضافه شود
              </Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>
                *ثبت فاکتور فقط و فقط بعد از واریز مبلغ ۲۰۰.۰۰۰ تومان امکان پذیر
                می باشد.
              </Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>
                *در صورت کسر شدن محصولی از فاکتور شما به هر دلیلی ، مبلغ مورد
                نظر توسط مجموعه عودت داده میشود
              </Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>
                *جهت ارسال سریع محصول خود بعد از واریز بیانه نسبت به تسویه
                فاکتور اقدام کنید
              </Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>
                *جهت مسدود نشدن حسابتان،از سفارش دادن با حساب های کاربری مختلف
                خودداری کنید
              </Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>*ادرس و شماره تماس خود را دقیق وارد کنید</Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>
                *امکان اضافه شدن هر محصول بعد از اتمام موجودی وجود دارد(پس با
                تیم فروش هماهنگ باشید)
              </Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>*تمامی قیمت ها بصورت جین(تعداد رنگبندی× سایز) می باشد</Text>
              <Text style={{ ...styles.guideText, marginVertical: 15 }}>
                *در صورتیکه موجودی هر محصولی تمام شود شما میتوانید با درخواست آن
                محصول از نیاز خود مارا مطلع کنید.(با کلیک بر آیکون "درخواست
                محصول")
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  guide: {
    fontFamily: "Shabnam-Bold",
    fontSize: 15,
    marginTop: 8,
    alignSelf: 'flex-end',
    color: 'white',
  },
  guideText: {
    fontFamily: 'Shabnam-Light',
    fontSize: 15,
    marginVertical: 2,
    textAlign: 'right',
    alignSelf: 'flex-end',
    color: 'white',
    lineHeight: 30,
  },
  info: {
    width: Device.width * 0.90,
    padding: 20,
    marginVertical: 20,
    alignItems: 'center'
  },
  seperator: {
    height: 0.7,
    width: device.width,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 20
  },
});

export default GuideShopScreen;
