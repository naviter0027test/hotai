import axios from 'axios';
import CryptoJS from 'crypto-js';

const API = {
  uuid: () => {
    let d = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now();
    }
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  },
  toDataURL: (src, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', src);
    xhr.responseType = 'blob';
    xhr.send();
  },
  request: (options) => {
    return axios(options)
      .then((response) => {
        if (response.request.responseURL && response.request.responseURL.indexOf('login') != -1) {
          window.location.href = response.request.responseURL;
          return;
        }
        return response;
      })
      .catch((error) => {
        throw (error.response.data);
      });
  },
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  generateMenuTreeData(centers, rawSubCenters, user, uploadFilePermission, uploadProductModelPermission) {
    let score = {
      'visibility': 1,
      'upload': 2,
      'maintenance': 3
    };

    let treeData = [{
      id: this.uuid(),
      name: 'Main Page',
      row: null,
      parent: null,
      link: '/',
      active: true,
      children: [],
    }];

    let active = null;
    const onGenerateTreeData = (row, treeData = null) => {
      if (!row.hasOwnProperty('CenterId')) {
        treeData = {
          id: this.uuid(),
          name: row.name,
          row,
          parent: treeData,
          link: ['/center', row.id].join('/'),
          active: false,
          children: [],
        };

        row.sub_centers.map((entry) => {
          if (!active) {
            active = entry.active;
          } else if (score[active] < score[entry.active]) {
            active = entry.active;
          }

          treeData = onGenerateTreeData(entry, treeData);
        });

        return treeData;
      }

      if (!row.parent && treeData.row && !treeData.row.hasOwnProperty('CenterId') && row.CenterId == treeData.row.id) {
        treeData.children.push({
          id: this.uuid(),
          name: row.name,
          row,
          parent: treeData,
          link: ['/center', row.CenterId, 'sub-center', row.id].join('/'),
          active: false,
          children: [],
        });

        return treeData;
      }

      if (row.parent && treeData.row && treeData.row.hasOwnProperty('CenterId') && row.parent == treeData.row.id) {
        treeData.children.push({
          id: this.uuid(),
          name: row.name,
          row,
          parent: treeData,
          link: ['/center', row.CenterId, 'sub-center', row.id].join('/'),
          active: false,
          children: [],
        });

        return treeData;
      }

      treeData.children = treeData.children.map((innerParent) => {
        return onGenerateTreeData(row, innerParent);
      });

      return treeData;
    };

    let sub_centers = [{
      id: this.uuid(),
      name: 'Upload',
      row: null,
      parent: null,
      link: '/upload',
      active: false,
      children: [],
    }, {
      id: this.uuid(),
      name: 'Share Management',
      row: null,
      parent: null,
      link: '/share-management',
      active: false,
      children: [],
    }, {
      id: this.uuid(),
      name: 'Model Management',
      row: null,
      parent: null,
      link: '/model-management',
      active: false,
      children: [],
    }, {
      id: this.uuid(),
      name: 'Team Management',
      row: null,
      parent: null,
      link: '/team',
      active: false,
      children: [],
    }, {
      id: this.uuid(),
      name: 'Approval History',
      row: null,
      parent: null,
      link: '/approve-history',
      active: false,
      children: [],
    }];
    let isOPC = false;
    if (user.type == 'HQ Admin' || user.type == 'Regional Admin') {
      if (user.roles) {
        user.roles.map((role) => {
          if (role.RegionName == 'OPC' || role.RegionName == 'HK' || role.RegionParent == 4)
            isOPC = true;
        });
      }
      if (isOPC == false) {
        sub_centers.push({
          id: this.uuid(),
          name: 'External Accounts',
          row: null,
          parent: null,
          link: '/external-accounts',
          show: false,
          children: [],
        });
      }
    }
    else {
      if (typeof (user.roles) == 'object')
        user.roles.map((role) => {
          if (role.RegionName == 'OPC' || role.RegionName == 'HK' || role.RegionParent == 4)
            isOPC = true;
        });
      for (var roleIdx = 0; roleIdx < user.roles.length; ++roleIdx)
        if (user.roles[roleIdx]['name'] == 'Team Leader' || user.roles[roleIdx]['name'] == 'Assistant') {
          if (isOPC == false) {
            sub_centers.push({
              id: this.uuid(),
              name: 'External Accounts',
              row: null,
              parent: null,
              link: '/external-accounts',
              show: false,
              children: [],
            });
          }
          break;
        }
    }

    centers.map((entry) => {
      const subCenters = [];
      rawSubCenters.map((row) => {
        if (row.CenterId == entry.id) {
          if (!row.parent && row.type != 'Node') {
            subCenters.push(row);
          } else if (!row.parent && row.type == 'Node') {
            if (rawSubCenters.filter(entry => entry.parent == row.id).length) {
              subCenters.push(row);
            }
          } else {
            let index = subCenters.findIndex(entry => entry.id == row.id);
            if (index == -1) {
              index = subCenters.findIndex(entry => entry.id == row.parent);
              if (index != -1) {
                subCenters.push(row);
              } else {
                index = entry.sub_centers.findIndex(entry => entry.id == row.parent);
                if (index != -1) {
                  subCenters.push(entry.sub_centers[index]);
                  subCenters.push(row);
                }
              }
            }
          }
        }
      });

      entry.sub_centers = subCenters;
      let data = onGenerateTreeData(entry, null);
      if (data.children.length) {
        treeData.push(data);
      }
    });

    let data = null;
    if (user.type != 'partner') {
      data = {
        id: this.uuid(),
        name: 'Management',
        row: null,
        parent: null,
        link: null,
        children: [],
      };

      let countNotShow = 0;
      if (!uploadFilePermission.active || ['upload', 'maintenance'].indexOf(uploadFilePermission.active) == -1) {
        let index = sub_centers.findIndex(entry => entry.name == 'Upload');
        if (index != -1) {
          countNotShow += 1;
          sub_centers.splice(index, 1);
        }
      }

      if (!uploadProductModelPermission.active || ['upload', 'maintenance'].indexOf(uploadProductModelPermission.active) == -1) {
        let index = sub_centers.findIndex(entry => entry.name == 'Model Management');
        if (index != -1) {
          countNotShow += 1;
          sub_centers.splice(index, 1);
        }
      }

      if (countNotShow == 2) {
        let index = sub_centers.findIndex(entry => entry.name == 'Approval History');
        if (index != -1) {
          sub_centers.splice(index, 1);
        }
      }
    }

    if (data) {
      data.children = sub_centers.map((row) => {
        row.parent = data;
        row.row = {
          CenterId: data.id,
          name: row.name,
          parent: null
        }

        return row;
      });

      treeData.push(data);
    }

    window.globalTreeData = treeData;
    return treeData;
  },
  onMenuTreeChangeActive(event, record, treeData, pathname) {
    event.preventDefault();
    if (record.name == 'Main Page' && pathname != '/') {
      window.location.href = '/';
    } else {
      const loop = (row) => {
        if (row.id == record.id && !row.children.length) {
          window.location.href = row.link;
          return;
        }

        if (row.id == record.id && row.children.length) {
          row.active = row.active == true ? false : true;
          return row;
        }

        if (row.id != record.id && row.children.length) {
          row.children = row.children.map((entry) => {
            return loop(entry);
          });

          return row;
        }

        return row;
      };

      treeData = treeData.map((row) => {
        return loop(row);
      });

      return treeData;
    }
  },
  isMiniSize() {
    let isMiniSize = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      isMiniSize = true;
    } else if ($(window).width() <= 768) {
      isMiniSize = true;
    }

    return isMiniSize;
  },
  colors: [
    '#D2B48C', '#FFDAB9', '#F5F5DC', '#B0E0E6', '#F5F5F5',
    '#FFFFE0', '#FFF5EE', '#FFFACD', '#ADD8E6', '#E6E6FA',
  ],
  decrypt(obj) {
    const key = CryptoJS.enc.Utf8.parse('omrc2.optoma.com');
    const iv = CryptoJS.enc.Utf8.parse('8NONwyJtHesysWpM');
    const decrypted = CryptoJS.AES.decrypt(obj.cryptText, key,
      {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }
    );

    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  },
  createMultipartUpload(ContentType, Key) {
    const options = {
      url: '/s3/create-multipart-upload',
      method: 'POST',
      data: {
        ContentType,
        Key
      }
    };

    return axios(options)
      .then((response) => {
        return response.data.multipart;
      });
  },
  uploadPart(Key, PartNumber, Body, UploadId) {
    const options = {
      url: '/s3/upload-part',
      method: 'POST',
      data: {
        Key,
        PartNumber,
        UploadId
      }
    };

    return axios(options)
      .then((response) => {
        const options = {
          url: response.data.url,
          method: 'PUT',
          headers: {
            'Content-Type': 'application/octet-stream'
          },
          data: Body
        };

        return axios(options);
      })
      .then((response) => {
        return {
          ETag: response.headers.etag,
          loaded: response.config.data.byteLength
        };
      });
  },
  completeMultipartUpload(Key, MultipartUpload, UploadId) {
    MultipartUpload.Parts = MultipartUpload.Parts.filter(entry => entry != null);
    const options = {
      url: '/s3/complete-multipart-upload',
      method: 'POST',
      data: {
        Key,
        UploadId,
        MultipartUpload
      }
    };

    return axios(options)
      .then((response) => {
        return response.data;
      });
  },
  headObject(Key) {
    const options = {
      url: '/s3/head-object',
      method: 'GET',
      params: {
        Key,
      }
    };

    return axios(options)
      .then((response) => {
        return response.data;
      });
  },
};

export default API;
