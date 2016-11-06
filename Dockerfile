FROM ubuntu


# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
  curl

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
  apt-get install -y nodejs build-essential


# Install OpenCV Binaries
RUN apt-get install -y libopencv-dev \
   python-opencv \
   imagemagick \
   git

# Install dependencies
COPY package.json /usr/src/app
RUN npm install

# Force OpenCv install
RUN npm install -S opencv

# Bundle app source code
COPY . /usr/src/app

# Expose running port
EXPOSE 3001


# Run
CMD ["npm", "start"]
