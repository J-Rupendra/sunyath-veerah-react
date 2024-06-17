# sunyath-veerah-react


# setup testing environment because we are using parcel(we haven't used create-react-app)
 - install react testing library
 - install jest
 - create babel.config.js and include some config into it - refer the jest babel apge
 - create .parcelrc and add configurations - refer parcel doc -> javascript -> babel
 - initiated jest config gile - npx jest --init
 - installed jsdom - used as a envirnment to execute our testcase like a browser
 - install @babel/preset-react - to support jsx inside our test case
 - Add this preset react config to babel config file
 - install @testing-library/jest-dom as dev dependency