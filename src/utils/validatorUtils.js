import AsyncValidator from 'async-validator'
import _ from 'lodash'

export default class ValidatorUtils {
  constructor({ rules, data, errMsg = {}, automatic = true, self = null }) {
    this.setRules(rules)
    this.data = data
    this.errMsg = errMsg
    automatic && this.setProxyValidate()
    self.$on('on-form-item-blur')
  }
  get Rules() {
    return this.rules
  }
  set Data(value) {
    this.data = value
  }
  get Data() {
    return this.data
  }
  get Validators() {
    return this.validators
  }
  set Validators(value) {
    this.validators = value
  }
  set ErrMsg(value) {
    this.errMsg = this.value
  }
  get ErrMsg() {
    return this.errMsg
  }
  setProxyValidate() {
    let that = this
    let p = {
      set(target, key, value) {
        target[key] = value
        that
          .validate(key)
          .then(() => {})
          .catch(() => {})
        return true
      }
    }
    console.log(p)
    this.data = new Proxy(this.data, p)
  }

  setRules(rules, cover = true) {
    !cover || (this.Validators = {})
    _(rules)
      .mapKeys(
        (value, key) => {
          console.log(value, key)
          this.Validators[key] = new AsyncValidator({ [key]: value })
        }
          // (this.Validators[key] = new AsyncValidator({ [key]: value }))
      )
      .value()
  }

  /**
   * 执行验证
   *
   * @param {String,Array} tempData 可选 传空将验证构造data 支持key，list<key>
   * @returns Promise
   *
   * @memberOf ValidatorUtils
   */
  validate(tempData) {
    // 错误数组
    const err = []
    let tempdata = _(this.Validators)
      .keys()
      .filter(
        p =>
          !tempData ||
          (tempData &&
            ((_.isString(tempData) && tempData === p) ||
              (_.isArray(tempData) && tempData.indexOf(p) > -1)))
      )
      .value()
    tempdata.forEach(p =>
      this.Validators[p].validate({ [p]: this.Data[p] }, error => {
        error && err.push(error[0])
        this.setErrMsg(p, error)
      })
    )
    if (err.length > 0) return Promise.reject(err)
    else return Promise.resolve(tempData)
  }
  /**
   *
   * 设置error消息
   * @param {any} error
   *
   * @memberOf ValidatorUtils
   */
  setErrMsg(key, error) {
    this.errMsg[key] = error ? error[0].message : undefined
  }
}
